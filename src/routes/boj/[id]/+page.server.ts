export async function load({ url, fetch, params }: LoadArguments) {
  const response = await fetch(`${url.origin}/api/boj/${params.id}`);
  return await response.json();
}
