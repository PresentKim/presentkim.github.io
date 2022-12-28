import { getBojInfoList, getBojInfoById } from '$lib/utils/boj';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export const GET = async ({ params }: LoadArguments) => {
  return json(await (+params.id ? getBojInfoById(params.id) : getBojInfoList()));
};
