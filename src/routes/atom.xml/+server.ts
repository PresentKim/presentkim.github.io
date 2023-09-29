import type { RequestHandler } from './$types';

import { author, description, domain, name } from '$lib/assets/site-info.json';
import type { Post } from '$lib/utils/blog';
import { getPosts } from '$lib/utils/blog';
import { minifyXML } from '$lib/utils/utils';

export const prerender = true;

export const GET: RequestHandler = () =>
  new Response(
    minifyXML(`
<feed xmlns="http://www.w3.org/2005/Atom">
  <id>${domain}/</id>
  <title><![CDATA[${name}]]></title>
  <subtitle><![CDATA[${description}]]></subtitle>
  <link rel="self" href="${domain}"></link>
  <author>
    <name>${author}</name>
    <uri>${domain}</uri>
  </author>
  <link rel="self" type="application/atom+xml" href="${domain}/atom.xml"/>
  <link rel="alternate" type="text/html" hreflang="en" href="${domain}"/>
  <generator>SvelteKit v1.20.5</generator>
  <icon>${domain}/favicon/any.svg</icon>
  <logo>${domain}/favicon/96.png</logo>
  <updated>${new Date().toISOString()}</updated>
  <rights>© 2023 ${author} </rights>
  ${getPosts((post) => !post.draft)
    .map((post) => item(post))
    .join(' ')}
</feed>`),
    {
      headers: {
        'Content-Type': 'application/xml'
      }
    }
  );

function item({ title, permalink, summary, date, tags }: Post) {
  return `
<entry>
  <title><![CDATA[${title}]]></title>
  <link href="${domain}/${permalink}" rel="alternate" type="text/html" title="${title}"/>
  <published>${new Date(date).toISOString()}</published>
  <updated>${new Date(date).toISOString()}</updated>
  <id>${domain}/${permalink}</id>
  <content type="html" src="${domain}/${permalink}"/>
  <author>
    <name>${author}</name>
  </author>
  ${tags.map((tag) => `<category term="${tag}"/>`).join(' ')}
  <summary>${summary}</summary>
</entry>
`;
}
