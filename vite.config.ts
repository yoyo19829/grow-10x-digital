// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Disable the Nitro server bundle so the build emits a static, prerendered
  // client bundle suitable for Apache/PHP shared hosting (e.g. Hostinger).
  nitro: false,
  tanstackStart: {
    // Prerender the home page so the build emits a static index.html.
    pages: [
      {
        path: "/",
        prerender: {
          enabled: true,
          autoSubfolderIndex: true,
        },
      },
    ],
  },
  vite: {
    server: {
      port: 5000,
      host: "0.0.0.0",
      strictPort: true,
      allowedHosts: true,
    },
  },
});
