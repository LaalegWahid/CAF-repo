// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// IMPORTANT: set this to the real domain of this microsite before deploying.
// It drives <link rel="canonical">, Open Graph URLs, the sitemap and JSON-LD @id's.
const SITE_URL = 'https://implantation-maroc.ma';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'ignore',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'fr',
        locales: { fr: 'fr-MA' },
      },
    }),
  ],
});
