import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

let runtimeErrorOverlay: (() => any) | undefined;
try {
  runtimeErrorOverlay = (await import("@replit/vite-plugin-runtime-error-modal")).default;
} catch {
  // Not available outside Replit — skip
}

const rawPort = process.env.PORT ?? "5173";
const hasExplicitPort = process.env.PORT !== undefined;

const port = Number(rawPort);

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

const basePath = process.env.BASE_PATH ?? "/";

async function getReplitPlugins() {
  if (process.env.NODE_ENV === "production" || process.env.REPL_ID === undefined) {
    return [];
  }
  try {
    const [cartographerMod, devBannerMod] = await Promise.all([
      import("@replit/vite-plugin-cartographer"),
      import("@replit/vite-plugin-dev-banner"),
    ]);
    return [
      cartographerMod.cartographer({
        root: path.resolve(import.meta.dirname, ".."),
      }),
      devBannerMod.devBanner(),
    ];
  } catch {
    return [];
  }
}

const replitPlugins = await getReplitPlugins();

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
    ...(runtimeErrorOverlay ? [runtimeErrorOverlay()] : []),
    ...replitPlugins,
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port,
    strictPort: hasExplicitPort,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
    },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
