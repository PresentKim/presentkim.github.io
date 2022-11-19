import type { PostData } from '$lib/utils/posts';

export async function load({ fetch, params }: LoadArguments) {
  const { tag } = params;
  const allPosts = await (await fetch(`/api/posts`)).json();

  const posts = allPosts.filter((post: PostData) => post.tags.includes(tag));
  return {
    tag,
    posts
  };
}
