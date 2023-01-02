import type { BojInfo } from '$lib/components/boj';

export async function load({ fetch, params }: LoadArguments) {
  const response = await fetch(`/api/boj/${params.id}`);
  return (await response.json()) as BojInfo;
}
