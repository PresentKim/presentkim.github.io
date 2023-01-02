import type { BojInfo } from '$lib/utils/boj';

export async function load({ fetch, params }: LoadArguments) {
  const response = await fetch(`/api/boj/${params.id}`);
  return (await response.json()) as BojInfo;
}
