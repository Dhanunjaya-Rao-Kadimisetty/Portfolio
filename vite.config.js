import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(() => {
  const isGitHubPagesBuild = process.env.DEPLOY_TARGET === "github-pages";

  return {
    base: isGitHubPagesBuild ? "/Portfolio/" : "/",
    plugins: [react()],
    server: {
      port: 5173,
    },
  };
});
