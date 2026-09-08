import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // We want a static build for Hostinger
  nitro: false,

  tanstackStart: {
    prerender: {
      enabled: true,
      autoSubfolderIndex: true,
      autoStaticPathsDiscovery: true,
      crawlLinks: true,
    },

    pages: [
      {
        path: "/",
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
