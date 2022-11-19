import type { ComponentType } from 'svelte';
import dayjs from 'dayjs';

export declare type MarkdownMetadata = {
  title: string;
  summary: string;
  date: string;
  tags: string[];
};

export declare type MarkdownResult = {
  html: string;
  head: string;
  css: { code: string; map: string | null };
};

export declare type MarkdownModule = {
  metadata: MarkdownMetadata;
  default: { render: () => MarkdownResult };
};

export declare type PostMetadata = MarkdownMetadata & {
  formattedDate: string;
};

export declare type PostData = PostMetadata & {
  permalink: string;
};

export declare type PostContentData = PostData & {
  content: ComponentType;
};

function parsePath(path: string): string {
  path = path.replaceAll('\\', '/');

  const POST_PATH_REGEX = /\/posts\/(.*?)\.md/gi;
  return Array.from(path.matchAll(POST_PATH_REGEX))[0][1];
}

export const transformMetadata = (metadata: MarkdownMetadata, permalink: string): PostData => {
  return {
    ...metadata,
    formattedDate: dayjs(metadata.date).format('YYYY년 MM월 DD일 HH:mm'),
    permalink
  };
};

const postModules = import.meta.glob('/posts/**/*.md') as Record<
  string,
  () => Promise<MarkdownModule>
>;

export const getPostList: () => Promise<Awaited<PostData>[]> = () => {
  return Promise.all(
    Object.entries(postModules).map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      return transformMetadata(metadata, parsePath(path));
    })
  );
};

export declare type PostRender = {
  metadata: PostData;
  content: MarkdownResult;
};

export const getPost = async (path: string) => {
  const key = `/posts/${path}.md`;
  if (postModules[key]) {
    const postFile = await postModules[key]();
    const rendered: PostRender = {
      metadata: transformMetadata(postFile.metadata, parsePath(key)),
      content: postFile.default.render()
    };
    rendered.content.html = rendered.content.html.replaceAll('〈', '<').replaceAll('〉', '>');

    return rendered;
  }
  return null;
};
