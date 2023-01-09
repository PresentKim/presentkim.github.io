import { getBojInfoById } from '$lib/utils/boj';

export const load = async ({ params }: LoadArguments) => getBojInfoById(params.id);
