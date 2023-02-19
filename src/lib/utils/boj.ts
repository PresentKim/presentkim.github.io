export declare type BojProblemMetadata = {
  id: number;
  title: string;
  tier: number;
  tags: string[];
};

export declare type BojProblemDocument = {
  description: string;
  input: string;
  output: string;
  limit: string;
  hint: string;
  sample: [string, string][];
};

export declare type BojProblemData = BojProblemMetadata & BojProblemDocument;

const modules = import.meta.glob('/src/lib/assets/boj/*.json') as Record<
  string,
  () => Promise<{ default: BojProblemData }>
>;

export async function getBojInfos() {
  return (
    await Promise.all(
      Object.values(modules).map(async (resolver) => {
        const { default: info } = await resolver();
        return {
          id: info.id,
          title: info.title,
          tier: info.tier,
          tags: info.tags
        };
      })
    )
  ).sort((a, b) => a.id - b.id);
}

export async function getBojInfoById(id: string) : Promise<BojProblemData> {
  const module = modules[`/src/lib/assets/boj/${id}.json`];
  if (module === undefined) throw Error(`Post not found : ${id}`);

  const { default: info } = await module();
  return info;
}
