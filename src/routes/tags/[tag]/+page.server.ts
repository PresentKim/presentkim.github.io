import { getPosts, pickPostInfo } from '$lib/utils/blog';

export const load = ({ params }: LoadArguments) => ({
  tag: params.tag,
  posts: getPosts()
    .filter((post) => post.tags.includes(params.tag))
    .map(pickPostInfo)
});
