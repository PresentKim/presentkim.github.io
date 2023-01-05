import { getPost } from '$lib/components/blog';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export const GET = async ({ params }: LoadArguments) => {
  const { permalink } = params;
  return json(await getPost(permalink));
};