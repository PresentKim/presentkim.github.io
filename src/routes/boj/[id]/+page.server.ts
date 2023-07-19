import type { PageServerLoad } from './$types';
import { getBojInfo } from '$lib/utils/boj';

export const load: PageServerLoad = ({ params: { id } }) =>
  getBojInfo(Number(id));
