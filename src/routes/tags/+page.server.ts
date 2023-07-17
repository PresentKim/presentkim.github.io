import { getPosts } from '$lib/utils/blog';

export const load = () => {
  const tagMap: Record<string, number> = {};

  getPosts().forEach((post) => {
    post.tags.forEach((tag) => {
      tagMap[tag] = (tagMap[tag] || 0) + 1;
    });
  });

  return tagMap;
};
