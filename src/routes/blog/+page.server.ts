export async function load({ url, fetch }: LoadArguments) {
  const response = await fetch(`${url.origin}/api/blog/index`);
  return { posts: await response.json() };
}
