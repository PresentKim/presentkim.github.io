import { getBojInfo } from '$lib/utils/boj';

export const load = ({ params }: LoadArguments) =>
  getBojInfo(Number(params.id));
