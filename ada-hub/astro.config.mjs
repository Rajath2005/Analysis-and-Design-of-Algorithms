import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ada-hub.replit.app',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mdx(),
    sitemap({
      filter: (page) => !page.includes('undefined'),
    }),
  ],
  output: 'static',
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
      langs: ['c', 'cpp', 'bash', 'json', 'text'],
      wrap: true,
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: true,
  },
  vite: {
    server: {
      allowedHosts: true,
    },
  },
});
