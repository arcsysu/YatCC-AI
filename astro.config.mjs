// @ts-check
import { defineConfig } from "astro/config";
import { copyFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
      allowedHosts: ["dvdbr3o-laptop", "dvdbr3o-laptop.local", ".local"],
    },
    preview: {
      allowedHosts: ["dvdbr3o-laptop", "dvdbr3o-laptop.local", ".local"],
    },
  },
  integrations: [
    {
      name: "copy-altcha-to-lang-dirs",
      hooks: {
        "astro:build:done": ({ dir }) => {
          const srcFile = join(dir.pathname, "js", "altcha.js");
          const langDirs = ["en", "zh"];
          
          for (const lang of langDirs) {
            const targetDir = join(dir.pathname, lang, "js");
            const targetFile = join(targetDir, "altcha.js");
            
            // 确保目标目录存在
            if (!existsSync(targetDir)) {
              mkdirSync(targetDir, { recursive: true });
            }
            
            // 复制文件
            if (existsSync(srcFile)) {
              copyFileSync(srcFile, targetFile);
              console.log(`Copied altcha.js to ${lang}/js/`);
            }
          }
        },
      },
    },
  ],
});
