import type { PageServerLoad } from './$types';

import { getBojInfos } from '$lib/utils/boj';
import { pickKeys } from '$lib/utils/utils';

export const load: PageServerLoad = () => ({
  infos: getBojInfos().map((info) =>
    pickKeys(info, ['id', 'title', 'tier', 'tags'])
  )
});
