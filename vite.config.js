// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: "./",
  preview: {
    host: true,
  },
  publicDir: resolve("public"),
  build: {
    outDir: resolve("dist"),
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        maerker: resolve(__dirname, "src/maerker.html"),
        skjorter: resolve(__dirname, "src/skjorter.html"),
        produktside: resolve(__dirname, "src/produktside.html"),
        betaling: resolve(__dirname, "src/betaling.html"),
        indkobskurv: resolve(__dirname, "src/indkobskurv.html"),
        omresres: resolve(__dirname, "src/omresres.html"),
        sitemap: resolve(__dirname, "src/sitemap.html"),
      },
    },
  },
});
