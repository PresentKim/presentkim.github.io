import { getPostList } from '$lib/utils/posts';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export const GET = async () => {
  return json(await getPostList());
};
