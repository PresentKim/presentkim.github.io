import dayjs from 'dayjs';

declare type MdMetadata = {
  title: string;
  summary: string;
  date: string;
  tags: string[];
  draft?: boolean;
};

export declare type MdRenderResult = {
  html: string;
  head: string;
  css: { code: string; map: string | null };
};

export declare type PostMetadata = MdMetadata & {
  formattedDate: string;
  permalink: string;
};

export declare type PostData = {
  metadata: PostMetadata;
  content: MdRenderResult;
};

const modules = import.meta.glob('/posts/**/*.md') as Record<
  string,
  () => Promise<{
    metadata: MdMetadata;
    default: { render: () => MdRenderResult };
  }>
>;

const transformMetadata = (metadata: MdMetadata, permalink: string): PostMetadata => {
  return {
    ...metadata,
    formattedDate: dayjs(metadata.date).format('YYYY-MM-DD'),
    permalink
  };
};

const transformRenderResult = (renderResult: MdRenderResult): MdRenderResult => {
  return {
    ...renderResult,
    html: renderResult.html.replaceAll('〈', '&lt;').replaceAll('〉', '&gt;')
  };
};

export async function getBlogPosts() {
  return (
    await Promise.all(
      Object.entries(modules).map(async ([path, resolver]) => {
        const { metadata } = await resolver();
        const permalink = path.match(/[\\\/]posts[\\\/](.*?)\.md/i)?.[1] ?? '';

        return transformMetadata(metadata, permalink);
      })
    )
  )
    .filter((post) => !post.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export async function getBlogPostByPermalink(permalink: string) {
  const module = modules[`/posts/${permalink}.md`];
  if (module === undefined) return null;

  const { metadata, default: renderer } = await module();
  const postData: PostData = {
    metadata: transformMetadata(metadata, permalink),
    content: transformRenderResult(renderer.render())
  };

  return postData;
}
