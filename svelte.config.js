import adapter from '@sveltejs/adapter-static';
import autoprefixer from 'autoprefixer';
import preprocess from 'svelte-preprocess';

import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    preprocess({
      postcss: {
        plugins: [autoprefixer]
      }
    }),

    mdsvexConfig
  ],
  extensions: ['.svelte', '.md'],
  kit: {
    adapter: adapter(),
    paths: {
      relative: false
    }
  }
};

export default config;
