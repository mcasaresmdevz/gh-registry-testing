import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx()],
  site: 'https://shah.github.io',
  base: '/gpm-lds-astro',
  clientEntrypoint: '@astrojs/react/client.js',
});
