import { getBlogPostByPermalink } from '$lib/utils/blog';

export const load = async ({ params }: LoadArguments) => getBlogPostByPermalink(params.permalink);
