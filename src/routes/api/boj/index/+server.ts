import { getBojInfoList } from '$lib/components/boj';
import { json } from '@sveltejs/kit';

export const GET = async () => {
  return json(await getBojInfoList());
};
