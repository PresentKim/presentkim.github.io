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
    return new Response(body, response);
  }

  return response;
}
