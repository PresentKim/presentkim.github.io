import type { BojInfo } from '$lib/components/boj';
import { error } from '@sveltejs/kit';

export async function load({ fetch, params }: LoadArguments) {
  const response = await fetch(`/api/boj/${params.id}`);
  const info = (await response.json()) as BojInfo;
  if (!info) {
    throw error(404, 'Not found');
  }
  return info;
}
