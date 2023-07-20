import dayjs from 'dayjs';

import { pickKeys } from '$lib/utils/utils';

declare type PostMetadata = {
  permalink: string;
  title: string;
  summary: string;
  date: string;
  tags: string[];
  draft: boolean;
};

export declare type Post = PostMetadata & {
  time: number;
  formattedDate: string;
  content: string;
  rawContent: string;
};

const DEFAULT_METADATA: PostMetadata = {
  permalink: '',
  title: '',
  summary: '',
  date: '0',
  tags: [],
  draft: false
};

const rawPostMap: Record<string, string> = import.meta.glob(
  '/static/posts/**/*.md',
  { eager: true, as: 'raw' }
);
const postMap: Map<string, Post> = new Map(
  Object.entries(
    import.meta.glob('/static/posts/**/*.md', { eager: true }) as Record<
      string,
      {
        metadata: Partial<PostMetadata>;
        default: { render: () => { html: string } };
      }
    >
  )
    .map(([path, value]): [string, Post] => {
      const permalink: string = (/\/static\/(.+?)\.md/i.exec(path) || [])[1];
      const metadata: PostMetadata = Object.assign(
        {},
        DEFAULT_METADATA,
        value.metadata
      );
      const html: string = value.default.render().html;

      const post: Post = {
        ...metadata,
        permalink,
        content: html
          .replaceAll('〈', '&lt;')
          .replaceAll('〉', '&gt;')
          .replaceAll(/data-svelte-h=".+?"/gi, ''),
        rawContent: rawPostMap[path]
          .replaceAll(/[\r\n]+/g, ' ')
          .replaceAll(/---\s+title.+? ---/gim, ''),
        time: new Date(metadata.date).getTime(),
        date: dayjs(metadata.date).toString(),
        formattedDate: dayjs(metadata.date).format('YYYY-MM-DD')
      };

      return [permalink, post];
    })
    .sort(([, a], [, b]) => b.time - a.time)
);

export const getPosts = (
  filter: (post: Post) => boolean = () => true
): Post[] => Array.from(postMap.values()).filter(filter);

export const getPost = (permalink: string): Post => {
  const post = postMap.get(permalink) ?? postMap.get(`posts/${permalink}`);
  if (post === undefined) {
    throw new Error(`'${permalink}' is invalid post permalink`);
  }
  return post;
};

const POST_INFO_KEYS = [
  'permalink',
  'title',
  'summary',
  'formattedDate'
] as const;
export type PostInfo = Pick<Post, (typeof POST_INFO_KEYS)[number]>;
export const pickPostInfo = (post: Post): PostInfo =>
  pickKeys(post, Array.from(POST_INFO_KEYS));

const POST_CONTENTS_KEYS = [
  'title',
  'summary',
  'formattedDate',
  'content',
  'tags'
] as const;
export type PostContents = Pick<Post, (typeof POST_CONTENTS_KEYS)[number]>;
export const pickPostContents = (post: Post): PostContents =>
  pickKeys(post, Array.from(POST_CONTENTS_KEYS));
