import type { MarkdownResult, PostData } from '$lib/components/blog';

export async function load({ fetch, params }: LoadArguments) {
  const { permalink } = params;
  const response = await fetch(`/api/blog/${permalink}`);
  return (await response.json()) as { metadata: PostData; content: MarkdownResult };
}
