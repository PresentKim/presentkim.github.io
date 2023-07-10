import { getBojInfos } from '$lib/utils/boj';
import { pickKeys } from '$lib/utils/utils';

export const load = () => ({
  infos: getBojInfos().map((info) =>
    pickKeys(info, ['id', 'title', 'tier', 'tags'])
  )
});
