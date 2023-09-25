import type { PageServerLoad } from './$types';

import { getPosts } from '$lib/utils/blog';

export const load: PageServerLoad = () => {
  const tagMap: Record<string, number> = {};

  getPosts().forEach((post) => {
    if (!post.draft) {
      post.tags.forEach((tag) => {
        tagMap[tag] = (tagMap[tag] || 0) + 1;
      });
    }
  });

  return { tagMap };
};
