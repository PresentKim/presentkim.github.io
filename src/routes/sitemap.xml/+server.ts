import { getBlogPosts } from '$lib/utils/blog';
import { domain } from '$lib/assets/site-info.json';

export const prerender = true;

export async function GET() {
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${(await getBlogPosts()).map(url).join(' ')}
        ${url('portfolio')}
        ${url('posts')}
    </urlset>`.trim(),
    {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'max-age=0, s-maxage=3600'
      }
    }
  );
}

function url(post: { permalink: string; date: string }): string;
function url(permalink: string): string;
function url(url: { permalink: string; date: string } | string): string {
  return `
    <url>
        <loc>${domain}/${
    typeof url === 'object' ? `posts/${url.permalink}` : url
  }</loc>
        <changefreq>daily</changefreq>
        ${typeof url === 'object' ? `<lastmod>${url.date}</lastmod>` : ''}
        <priority>0.7</priority>
    </url>
`;
}
