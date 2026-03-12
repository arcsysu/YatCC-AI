// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
      allowedHosts: [
        "dvdbr3o-laptop", // 允许你平板上输入的那个名称
        "laptop.local", // 某些系统下带后缀的名称
        ".local", // 或者允许所有以 .local 结尾的主机名
      ],
    },
  },
});
