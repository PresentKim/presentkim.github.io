export async function load({ url, fetch, params }: LoadArguments) {
  const response = await fetch(`${url.origin}/api/blog/${params.permalink}`);
  return await response.json();
}
