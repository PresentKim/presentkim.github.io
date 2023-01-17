import { getBlogPosts } from '$lib/utils/blog';

export const load = async () => ({ posts: getBlogPosts() });
