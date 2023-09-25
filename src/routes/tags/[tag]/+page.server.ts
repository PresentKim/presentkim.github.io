import type { PageServerLoad } from './$types';

import { getPosts, pickPostInfo } from '$lib/utils/blog';

export const load: PageServerLoad = ({ params: { tag } }) => ({
  tag,
  posts: getPosts()
    .filter((post) => !post.draft && post.tags.includes(tag))
    .map(pickPostInfo)
});
