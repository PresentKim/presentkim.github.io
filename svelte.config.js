import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
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
    adapter: adapter()
  }
};

export default config;
