import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { componentTagger } from "lovable-tagger";
import path from "node:path";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "src"),
    },
    dedupe: [
      "react",
      "react-dom",
      "@tanstack/react-router",
      "@tanstack/react-query",
    ],
  },
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
      routesDirectory: "src/routes",
      generatedRouteTree: "src/routeTree.gen.ts",
    }),
    react(),
    tailwindcss(),
    tsconfigPaths({ projects: ["./tsconfig.json"] }),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
}));
