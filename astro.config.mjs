import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://willemijn.tech',
  i18n: {
    locales: ['en', 'nl'],
    defaultLocale: 'en',
  },
  integrations: [sitemap()],
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
    format: ['avif', 'webp'],
  },
  server: {
    port: 3000,
    host: true,
  },
  devToolbar: {
    enabled: true,
  },
});
