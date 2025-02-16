import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/realty-sectors/",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
  server: {
    port: 3000,
    open: true,
  },
});
