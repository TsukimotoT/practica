import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.funerariaaurora.cl',
  integrations: [tailwind(), sitemap()],
  output: 'static',
  base: '/funeraria-aurora/', // Asegúrate de usar el nombre del repositorio aquí.
  site: 'https://TsukimotoT.github.io/funeraria-aurora/',
});