import { getBlogPosts } from '$lib/utils/blog';
import { domain } from '$lib/assets/site-info.json';
import { minifyXML } from '$lib/utils/utils';
import dayjs from 'dayjs';

export const prerender = true;

export const GET = async () =>
  new Response(
    minifyXML(`
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${(await getBlogPosts())
      .map(({ permalink, date }) =>
        url(`posts/${permalink}`, 'daily', 0.7, dayjs(date).toString())
      )
      .join('')}
    ${url('posts', 'daily', 0.7)}
    ${url('portfolio', 'daily', 1.0)}
    ${url('', 'weekly', 1.0)}
</urlset>
`),
    {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'max-age=0, s-maxage=3600'
      }
    }
  );

const url = (
  permalink: string,
  changefreq: string,
  priority: number,
  lastmod: string | null = null
) => `
<url>
    <loc>${domain}/${permalink}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
</url>`;
