import { getBojInfoList } from '$lib/utils/boj';
import { json } from '@sveltejs/kit';

export const GET = async () => {
  return json(await getBojInfoList());
};
