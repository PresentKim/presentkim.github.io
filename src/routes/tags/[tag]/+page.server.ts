import type { PageServerLoad } from './$types';
import { getPosts, pickPostInfo } from '$lib/utils/blog';

export const load: PageServerLoad = ({ params: { tag } }) => ({
  tag,
  posts: getPosts()
    .filter((post) => post.tags.includes(tag))
    .map(pickPostInfo)
});
