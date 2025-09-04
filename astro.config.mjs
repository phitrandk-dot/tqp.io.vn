// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://phitrandk-dot.github.io/tqp.io.vn/',
	integrations: [mdx(), sitemap()],
});
