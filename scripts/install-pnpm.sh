#!/usr/bin/env sh

set -eu

SCRIPT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
REPO_ROOT=$(CDPATH= cd -- "$SCRIPT_DIR/.." && pwd)
PACKAGE_JSON="$REPO_ROOT/package.json"

if [ -n "${PNPM_VERSION:-}" ]; then
  REQUESTED_SPEC=$PNPM_VERSION
else
  REQUESTED_SPEC=$(sed -n 's/^[[:space:]]*"packageManager":[[:space:]]*"\([^"]*\)".*/\1/p' "$PACKAGE_JSON" | head -n 1)
fi

if [ -z "${REQUESTED_SPEC:-}" ]; then
  REQUESTED_SPEC="pnpm@latest"
fi

get_command_version() {
  if command -v "$1" >/dev/null 2>&1; then
    "$1" --version 2>/dev/null | head -n 1
    return 0
  fi
  return 1
}

run_root() {
  if [ "$(id -u)" -eq 0 ]; then
    "$@"
    return
  fi

  if command -v sudo >/dev/null 2>&1; then
    sudo "$@"
    return
  fi

  echo "[install-pnpm] Need root privileges for: $*" >&2
  exit 1
}

ensure_node_and_npm() {
  if NODE_VERSION=$(get_command_version node) && NPM_VERSION=$(get_command_version npm); then
    echo "[install-pnpm] node already available: $NODE_VERSION"
    return
  fi

  echo "[install-pnpm] node/npm missing, trying to install Node.js"

  case "$(uname -s)" in
    Darwin)
      if ! command -v brew >/dev/null 2>&1; then
        echo "[install-pnpm] Homebrew is required to auto-install Node.js on macOS." >&2
        exit 1
      fi
      brew install node
      ;;
    Linux)
      if command -v apt-get >/dev/null 2>&1; then
        run_root apt-get update
        run_root apt-get install -y nodejs npm
      elif command -v dnf >/dev/null 2>&1; then
        run_root dnf install -y nodejs npm
      elif command -v yum >/dev/null 2>&1; then
        run_root yum install -y nodejs npm
      elif command -v pacman >/dev/null 2>&1; then
        run_root pacman -Sy --noconfirm nodejs npm
      elif command -v zypper >/dev/null 2>&1; then
        run_root zypper install -y nodejs npm
      elif command -v apk >/dev/null 2>&1; then
        run_root apk add --no-cache nodejs npm
      else
        echo "[install-pnpm] Unsupported Linux package manager for automatic Node.js installation." >&2
        exit 1
      fi
      ;;
    *)
      echo "[install-pnpm] Unsupported platform: $(uname -s)" >&2
      exit 1
      ;;
  esac

  if ! NODE_VERSION=$(get_command_version node) || ! NPM_VERSION=$(get_command_version npm); then
    echo "[install-pnpm] Node.js installation finished but node/npm is still unavailable. Reopen your shell and try again." >&2
    exit 1
  fi

  echo "[install-pnpm] node ready: $NODE_VERSION"
}

echo "[install-pnpm] target: $REQUESTED_SPEC"

ensure_node_and_npm

if CURRENT_VERSION=$(get_command_version pnpm); then
  echo "[install-pnpm] pnpm already available: $CURRENT_VERSION"
  exit 0
fi

if COREPACK_VERSION=$(get_command_version corepack); then
  echo "[install-pnpm] using corepack $COREPACK_VERSION"
  corepack prepare "$REQUESTED_SPEC" --activate
  corepack enable pnpm

  if ACTIVATED_VERSION=$(get_command_version pnpm); then
    echo "[install-pnpm] pnpm ready: $ACTIVATED_VERSION"
    exit 0
  fi
fi

if ! NPM_VERSION=$(get_command_version npm); then
  echo "[install-pnpm] Neither corepack nor npm is available. Install Node.js >= 22.12.0 first." >&2
  exit 1
fi

echo "[install-pnpm] falling back to npm $NPM_VERSION"
npm install --global "$REQUESTED_SPEC"

if ! INSTALLED_VERSION=$(get_command_version pnpm); then
  echo "[install-pnpm] pnpm download finished but the command is still unavailable. Reopen your shell and try again." >&2
  exit 1
fi

echo "[install-pnpm] pnpm ready: $INSTALLED_VERSION"
