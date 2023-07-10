import { getPost, pickPostContents } from '$lib/utils/blog';

export const load = ({ params }: LoadArguments) =>
  pickPostContents(getPost(params.permalink));
