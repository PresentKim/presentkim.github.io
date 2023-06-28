import { mdsvex } from 'mdsvex';

import fs from 'fs';
import remarkEmoji from 'remark-emoji';
import remarkAdmonitions from 'remark-admonitions';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex-svelte';
import rehypeExternalLinks from 'rehype-external-links';

const ADMONITION_ICON_PATH = './src/lib/assets/admonitions-icon/';
const customTypes = Object.fromEntries(
  fs.readdirSync(ADMONITION_ICON_PATH).map((file) => [
    file.split('.')[0],
    {
      svg: fs
        .readFileSync(ADMONITION_ICON_PATH + file)
        .toString()
        .replaceAll(/[\r\n]| {2}/g, '')
    }
  ])
);

export default mdsvex({
  extensions: ['.md'],
  remarkPlugins: [remarkEmoji, remarkMath, [remarkAdmonitions, { customTypes }]],
  rehypePlugins: [rehypeKatex, [rehypeExternalLinks, { rel: ['nofollow'], target: '_blank' }]]
});
