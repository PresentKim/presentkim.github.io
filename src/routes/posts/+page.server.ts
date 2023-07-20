import type { PageServerLoad } from './$types';

import { getPosts, pickPostInfo } from '$lib/utils/blog';

export const load: PageServerLoad = () => ({
  posts: getPosts((post) => !post.draft).map(pickPostInfo)
});
