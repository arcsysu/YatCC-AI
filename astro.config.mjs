// @ts-check
import { defineConfig } from "astro/config";

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
});
