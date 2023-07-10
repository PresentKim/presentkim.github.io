import type { Post } from '$lib/utils/blog';
import { getPosts } from '$lib/utils/blog';
import { title, domain, description } from '$lib/assets/site-info.json';
import dayjs from 'dayjs';
import { minifyXML } from '$lib/utils/utils';
export const prerender = true;

export function GET() {
  const posts = getPosts();
  return new Response(
    minifyXML(`
<rss xmlns:content="https://purl.org/rss/1.0/modules/content/" version="2.0">
    <channel>
        <title><![CDATA[ ${title}'s RSS Feed ]]></title>
        <description><![CDATA[ ${description} ]]></description>
        <link>${domain}</link>
        <generator>SvelteKit v1.20.5</generator>
        <lastBuildDate>${dayjs(new Date())}</lastBuildDate>
        <pubDate>${dayjs(new Date(posts[0].date))}</pubDate>
        ${posts.map((post) => item(post)).join(' ')}
    </channel>
</rss>`),
    {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'max-age=0, s-maxage=3600'
      }
    }
  );
}

function item({ title, permalink, summary, date, rawContent }: Post) {
  return `
<item>
    <title><![CDATA[ ${title} ]]></title>
    <link>${domain}${permalink}</link>
    <guid isPermaLink="false">${domain}/${permalink}</guid>
    <description><![CDATA[ ${summary} ]]></description>
    <pubDate>${date}</pubDate>
    <content:encoded><![CDATA[ ${rawContent} ]]></content:encoded>
</item>
`;
}
