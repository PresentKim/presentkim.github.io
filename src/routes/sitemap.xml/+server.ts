import { getBlogPosts } from '$lib/utils/blog';
import { domain } from '$lib/assets/site-info.json';

export const prerender = true;

export async function GET() {
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset
        xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="https://www.w3.org/1999/xhtml"
        xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >
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
        <loc>${domain}/${typeof url === 'object' ? url.permalink : url}</loc>
        <changefreq>daily</changefreq>
        ${typeof url === 'object' ? `<lastmod>${url.date}</lastmod>` : ''}
        <priority>0.7</priority>
    </url>
`;
}
