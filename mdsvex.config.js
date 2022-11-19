import { mdsvex } from 'mdsvex';

import remarkEmoji from 'remark-emoji';

export default mdsvex({
  extensions: ['.md'],
  remarkPlugins: [remarkEmoji]
});
