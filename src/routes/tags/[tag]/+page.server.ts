import { getBlogPosts } from '$lib/utils/blog';

export const load = async ({ params }: LoadArguments) => ({
  tag: params.tag,
  posts: (await getBlogPosts()).filter((post) => post.tags.includes(params.tag))
});
