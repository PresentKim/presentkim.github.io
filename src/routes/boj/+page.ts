export async function load({ url, fetch }: LoadArguments) {
  const response = await fetch(`${url.origin}/api/boj/index`);
  return { infos: await response.json() };
}
