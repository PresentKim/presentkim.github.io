import { minify } from 'html-minifier';

export async function handle({ event, resolve }) {
  const response = await resolve(event);

  if (response.headers.get('content-type').startsWith('text/html')) {
    let body = await response.text();

    /** Remove 'data-sveltekit-fetched' json data */
    body = body.replace(
      /<script *type="application\/json" *data-sveltekit-fetched.*?>[\s\S]*?<\/script>/igm,
      ''
    );

    /** Remove 'data-sveltekit-hydrate' module script */
    body = body.replace(
      /<script *type="module" *data-sveltekit-hydrate.*?>[\s\S]*?<\/script>/igm,
      ''
    );

    /** Minify html */
    body = minify(body, {
      collapseBooleanAttributes: true,
      collapseInlineTagWhitespace: true,
      collapseWhitespace: true,
      conservativeCollapse: true,
      decodeEntities: true,
      html5: true,
      minifyCSS: true,
      minifyJS: true,
      removeAttributeQuotes: true,
      removeComments: true,
      removeOptionalTags: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      useShortDoctype: true
    });
    return new Response(body, response);
  }

  return response;
}
