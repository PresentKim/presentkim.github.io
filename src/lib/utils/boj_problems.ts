export declare type BojProblemData = {
  id: number;
  title: string;
  description: string;
  tier: number;
  input: string;
  output: string;
  limit: string;
  sample: [string, string][];
  tags: string[];
};

export declare type BojProblemModule = BojProblemData & {
  default: BojProblemData;
};

const bojProblemModules = import.meta.glob('../boj/*.json') as Record<
  string,
  () => Promise<BojProblemModule>
>;

export const getBojProblemData = async (id: string) => {
  const problemModule = bojProblemModules[`../boj/${id}.json`];
  return problemModule !== undefined ? (await problemModule()).default : null;
};
