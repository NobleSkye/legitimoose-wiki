import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://legitimoose.wiki',
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});