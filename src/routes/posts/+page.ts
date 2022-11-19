export async function load({ fetch }: LoadArguments) {
  return { posts: await (await fetch(`/api/posts`)).json() };
}
