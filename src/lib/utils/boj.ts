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

const bojInfoMap = new Map(
  Object.entries(
    import.meta.glob('/src/lib/assets/boj/*.json', {
      eager: true
    }) as Record<string, { default: BojProblemData }>
  )
    .map(([, module]): [number, BojProblemData] => [
      module.default.id,
      module.default
    ])
    .sort(([, a], [, b]) => a.id - b.id)
);

export const getBojInfos = (): BojProblemData[] =>
  Array.from(bojInfoMap.values());

export const getBojInfo = (id: number): BojProblemData | null =>
  bojInfoMap.get(id) ?? null;
