import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      assets: "/src/assets",
      components: "/src/components",
      pages: "/src/pages",
      styles: "/src/styles",
      // utils: "/src/utils",
    },
  },
});
