import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "http://www.greatermohali.com/",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  server: {
    headers: {
      "Content-Type": "application/javascript",
    },
  },
});
