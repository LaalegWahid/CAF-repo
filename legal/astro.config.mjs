// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Canonical URLs, Open Graph tags and the sitemap.
  // Change to the real domain before deploying.
  site: 'https://audit.cabinet-caf.ma',

  server: {
    // Allow tunnels (ngrok, Cloudflare, LocalTunnel) to reach the dev server.
    allowedHosts: ['.ngrok-free.app', '.ngrok.app', '.trycloudflare.com'],
  },
  vite: {
    preview: {
      allowedHosts: ['.ngrok-free.app', '.ngrok.app', '.trycloudflare.com'],
    },
  },
});
