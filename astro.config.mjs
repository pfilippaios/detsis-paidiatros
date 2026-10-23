// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://detsis-paidiatros.gr',
  trailingSlash: 'always',
  build: { format: 'directory' },
  // keep Greek quotes and punctuation in articles exactly as written
  markdown: { smartypants: false },
});
