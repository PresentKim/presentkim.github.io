import { getBojInfoById } from '$lib/components/boj';
import { json } from '@sveltejs/kit';

export const GET = async ({ params }: LoadArguments) => {
  return json(await getBojInfoById(+params.id));
};
