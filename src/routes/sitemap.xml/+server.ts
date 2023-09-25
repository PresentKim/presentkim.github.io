import type { RequestHandler } from './$types';

import { domain } from '$lib/assets/site-info.json';
import { getPosts } from '$lib/utils/blog';
import { minifyXML } from '$lib/utils/utils';

export const prerender = true;

export const GET: RequestHandler = () =>
  new Response(
    minifyXML(`
<urlset
    xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
    ${url('', 1.0)}
    ${url('posts', 0.7)}
    ${url('about', 1.0)}
    ${getPosts((post) => !post.draft)
      .map(({ permalink, date }) =>
        url(`${permalink}`, 0.7, new Date(date).toISOString())
      )
      .join('')}
</urlset>
`),
    {
      headers: {
        'content-type': 'application/xml; charset=utf-8'
      }
    }
  );

const url = (
  permalink: string,
  priority: number,
  lastmod: string | null = null
) => `
<url>
    <loc>${domain}/${permalink}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
    <priority>${priority}</priority>
</url>`;
