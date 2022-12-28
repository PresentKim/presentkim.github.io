export async function load({ fetch }: LoadArguments) {
  return { infos: await (await fetch(`/api/boj/0`)).json() };
}
