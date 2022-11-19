import { getPostList } from '$lib/utils/posts';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export const GET = async () => {
  const posts = (await getPostList()).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return json(posts);
};
