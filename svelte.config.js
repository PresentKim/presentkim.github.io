import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    preprocess({
      postcss: {
        plugins: [autoprefixer]
      }
    }),

    mdsvex({
      extensions: ['.md']
    })
  ],
  extensions: ['.svelte', '.md'],
  kit: {
    adapter: adapter()
  }
};

export default config;
