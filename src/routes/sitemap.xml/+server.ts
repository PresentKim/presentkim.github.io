import type { RequestHandler } from './$types';

import { domain } from '$lib/assets/site-info.json';
import { getPosts } from '$lib/utils/blog';
import { minifyXML } from '$lib/utils/utils';

export const prerender = true;

export const GET: RequestHandler = () =>
  new Response(
    minifyXML(`
<urlset
    xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xhtml="https://www.w3.org/1999/xhtml">
    ${getPosts()
      .map(({ permalink, date }) =>
        url(`${permalink}`, 0.7, new Date(date).toISOString())
      )
      .join('')}
    ${url('posts', 0.7)}
    ${url('portfolio', 1.0)}
    ${url('', 1.0)}
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
    <priority>${priority}</priority>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
</url>`;
