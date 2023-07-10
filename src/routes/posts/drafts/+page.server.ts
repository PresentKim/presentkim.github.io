import { getPosts, pickPostInfo } from '$lib/utils/blog';

export const load = () => ({
  posts: getPosts((post) => post.draft).map(pickPostInfo)
});
