import type { PageServerLoad } from './$types';

import { getPost, pickPostContents } from '$lib/utils/blog';

export const load: PageServerLoad = ({ params: { permalink } }) =>
  pickPostContents(getPost(permalink));
