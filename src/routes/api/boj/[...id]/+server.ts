import { getBojProblemData } from '$lib/utils/boj_problems';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export const GET = async ({ params }: LoadArguments) => {
  return json(await getBojProblemData(params.id ?? ''));
};
