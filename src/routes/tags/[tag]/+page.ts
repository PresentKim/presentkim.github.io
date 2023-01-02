import type { PostData } from '$lib/components/blog';

export async function load({ fetch, params }: LoadArguments) {
  const { tag } = params;
  const allPosts = await (await fetch(`/api/blog/index`)).json();

  const posts = allPosts.filter((post: PostData) => post.tags.includes(tag));
  return { tag, posts };
}
