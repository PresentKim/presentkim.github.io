import { getDraftPosts } from '$lib/utils/blog';

export const load = async () => ({ posts: getDraftPosts() });
