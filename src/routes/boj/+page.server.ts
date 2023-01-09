import { getBojInfos } from '$lib/utils/boj';

export const load = async () => ({ infos: getBojInfos() });
