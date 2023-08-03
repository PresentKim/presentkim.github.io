import type { PageServerLoad } from './$types';

import { getBojInfos } from '$lib/utils/boj';
import { pick } from '$lib/utils/utils';

export const load: PageServerLoad = () => ({
  infos: getBojInfos().map((info) =>
    pick(info, ['id', 'title', 'tier', 'tags'])
  )
});
