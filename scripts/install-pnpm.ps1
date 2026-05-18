$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$packageJsonPath = Join-Path $repoRoot "package.json"
$packageJson = Get-Content $packageJsonPath -Raw | ConvertFrom-Json

$requestedSpec = $env:PNPM_VERSION
if ([string]::IsNullOrWhiteSpace($requestedSpec)) {
  $requestedSpec = $packageJson.packageManager
}
if ([string]::IsNullOrWhiteSpace($requestedSpec)) {
  $requestedSpec = "pnpm@latest"
}

function Get-CommandVersion {
  param([string]$CommandName, [string[]]$Arguments = @("--version"))

  try {
    $output = & $CommandName @Arguments 2>$null
    if ($LASTEXITCODE -eq 0 -and $output) {
      return ($output | Out-String).Trim()
    }
  } catch {
    return $null
  }

  return $null
}

function Add-PathIfExists {
  param([string]$Candidate)

  if (-not [string]::IsNullOrWhiteSpace($Candidate) -and (Test-Path $Candidate)) {
    $pathEntries = $env:Path -split ";"
    if ($pathEntries -notcontains $Candidate) {
      $env:Path = "$Candidate;$env:Path"
    }
  }
}

function Refresh-NodePath {
  Add-PathIfExists (Join-Path $env:ProgramFiles "nodejs")
  Add-PathIfExists (Join-Path ${env:ProgramFiles(x86)} "nodejs")
  Add-PathIfExists (Join-Path $env:APPDATA "npm")
  Add-PathIfExists (Join-Path $env:USERPROFILE "scoop\shims")
}

function Ensure-NodeAndNpm {
  $nodeVersion = Get-CommandVersion "node"
  $npmVersion = Get-CommandVersion "npm"
  if ($nodeVersion -and $npmVersion) {
    Write-Host "[install-pnpm] node already available: $nodeVersion"
    return
  }

  Write-Host "[install-pnpm] node/npm missing, trying to install Node.js LTS"

  if (Get-Command winget -ErrorAction SilentlyContinue) {
    & winget install --id OpenJS.NodeJS.LTS --exact --accept-package-agreements --accept-source-agreements
  } elseif (Get-Command scoop -ErrorAction SilentlyContinue) {
    & scoop install nodejs-lts
  } elseif (Get-Command choco -ErrorAction SilentlyContinue) {
    & choco install nodejs-lts -y
  } else {
    throw "[install-pnpm] Could not find winget, scoop, or choco to install Node.js automatically."
  }

  Refresh-NodePath

  $nodeVersion = Get-CommandVersion "node"
  $npmVersion = Get-CommandVersion "npm"
  if (-not $nodeVersion -or -not $npmVersion) {
    throw "[install-pnpm] Node.js installation finished but node/npm is still unavailable. Reopen your shell and try again."
  }

  Write-Host "[install-pnpm] node ready: $nodeVersion"
}

Write-Host "[install-pnpm] target: $requestedSpec"

Ensure-NodeAndNpm

$currentVersion = Get-CommandVersion "pnpm"
if ($currentVersion) {
  Write-Host "[install-pnpm] pnpm already available: $currentVersion"
  exit 0
}

$corepackVersion = Get-CommandVersion "corepack"
if ($corepackVersion) {
  Write-Host "[install-pnpm] using corepack $corepackVersion"
  & corepack prepare $requestedSpec --activate
  & corepack enable pnpm

  $activatedVersion = Get-CommandVersion "pnpm"
  if ($activatedVersion) {
    Write-Host "[install-pnpm] pnpm ready: $activatedVersion"
    exit 0
  }
}

$npmVersion = Get-CommandVersion "npm"
if (-not $npmVersion) {
  throw "[install-pnpm] Neither corepack nor npm is available. Install Node.js >= 22.12.0 first."
}

Write-Host "[install-pnpm] falling back to npm $npmVersion"
& npm install --global $requestedSpec

$installedVersion = Get-CommandVersion "pnpm"
if (-not $installedVersion) {
  throw "[install-pnpm] pnpm download finished but the command is still unavailable. Reopen your shell and try again."
}

Write-Host "[install-pnpm] pnpm ready: $installedVersion"
