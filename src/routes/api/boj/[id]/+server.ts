import { getBojInfoList, getBojInfoById } from '$lib/components/boj';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export const GET = async ({ params }: LoadArguments) => {
  const id = +params.id;
  return json(await (id ? getBojInfoById(id) : getBojInfoList()));
};
