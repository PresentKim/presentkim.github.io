import type { PostData, MarkdownResult } from '$lib/utils/posts';
import { error } from '@sveltejs/kit';

export async function load({ fetch, params }: LoadArguments) {
  const { permalink } = params;
  const response = await fetch(`/api/post/${permalink}`);
  const post = (await response.json()) as { metadata: PostData; content: MarkdownResult };
  if (!post) {
    throw error(404, 'Not found');
  }
  return post;
}
