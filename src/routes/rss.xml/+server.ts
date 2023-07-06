import { getBlogPosts, getBlogPostByPermalink } from '$lib/utils/blog';
import { title, domain, description } from '$lib/assets/site-info.json';
import type { PostMetadata } from '$lib/utils/blog';
export const prerender = true;

export async function GET() {
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
    <rss
        xmlns:dc="https://purl.org/dc/elements/1.1/"
        xmlns:content="https://purl.org/rss/1.0/modules/content/"
        xmlns:atom="https://www.w3.org/2005/Atom"
        version="2.0">
        <channel>
            <title>${title}</title>
            <link>${domain}</link>
            <description>${description}</description>
            ${(await getBlogPosts()).map((post) => item(post)).join(' ')}
        </channel>
    </rss>`.trim(),
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
        <title>${title}</title>
        <link>${domain}/posts/${permalink}</link>
        <guid isPermaLink="false">${domain}/posts/${permalink}</guid>
        <description>${summary}</description>
        <pubDate>${date}</pubDate>
        <!--TODO: include <content:encoded> tag-->
    </item>
`;
}
