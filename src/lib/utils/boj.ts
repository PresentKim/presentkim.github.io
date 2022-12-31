export declare type BojInfoHeader = {
  id: number;
  title: string;
  tier: number;
  tags: string[];
};
export declare type BojInfoBody = {
  description: string;
  input: string;
  output: string;
  limit: string;
  sample: [string, string][];
};
export declare type BojInfo = BojInfoHeader & BojInfoBody;

type BojInfoModule = () => Promise<{ default: BojInfo }>;
const modules = import.meta.glob('/src/lib/boj/*.json') as Record<string, BojInfoModule>;

export const getBojInfoList: () => Promise<Awaited<BojInfoHeader>[]> = () => {
  return Promise.all(
    Object.values(modules).map(async (resolver) => {
      const info = (await resolver()).default;
      return {
        id: info.id,
        title: info.title,
        tier: info.tier,
        tags: info.tags
      };
    })
  );
};

export const getBojInfoById = async (id: number) => {
  const problemModule = modules[`/src/lib/boj/${id}.json`];
  return problemModule !== undefined ? (await problemModule()).default : null;
};
