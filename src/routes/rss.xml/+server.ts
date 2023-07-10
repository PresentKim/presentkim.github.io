import { getBlogPosts, getBlogPostByPermalink } from '$lib/utils/blog';
import { title, domain, description } from '$lib/assets/site-info.json';
import type { PostMetadata } from '$lib/utils/blog';
import dayjs from 'dayjs';
import { minifyXML } from '$lib/utils/utils';
export const prerender = true;

export async function GET() {
  const posts = await getBlogPosts();
  return new Response(
    minifyXML(
      `
<rss xmlns:dc="https://purl.org/dc/elements/1.1/"
  xmlns:content="https://purl.org/rss/1.0/modules/content/"
  xmlns:atom="https://www.w3.org/2005/Atom" version="2.0">
    <channel>
        <title><![CDATA[ ${title}'s RSS Feed ]]></title>
        <description><![CDATA[ ${description} ]]></description>
        <link>${domain}</link>
        <generator>SvelteKit v1.20.5</generator>
        <lastBuildDate>${dayjs(new Date())}</lastBuildDate>
        <pubDate>${dayjs(new Date(posts[0].date))}</pubDate>
        ${posts.map((post) => item(post)).join(' ')}
    </channel>
</rss>`
    ),
    {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'max-age=0, s-maxage=3600'
      }
    }
  );
}

function item({ title, permalink, summary, date }: PostMetadata) {
  return `
<item>
    <title><![CDATA[ ${title} ]]></title>
    <link>${domain}/posts/${permalink}</link>
    <guid isPermaLink="false">${domain}/posts/${permalink}</guid>
    <description><![CDATA[ ${summary} ]]></description>
    <pubDate>${date}</pubDate>
    <!--TODO: include <content:encoded> tag-->
</item>
`;
}
