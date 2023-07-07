<script lang="ts">
  import type { PostMetadata } from '$lib/utils/blog';
  import PostList from '$lib/components/PostList.svelte';

  import { title, description } from '$lib/assets/site-info.json';
  export let data: { posts: PostMetadata[] } = {};
</script>

<svelte:head>
  <title>{title}</title>
  <meta property="og:title" content={title} />

  <meta name="description" content={description} />
  <meta property="og:description" content={description} />

  <meta property="og:type" content="website" />
</svelte:head>

<h1 class="block text-3xl mb-5">
  전체 포스트
  <p class="text-sm inline">({data.posts.length})</p>
</h1>

<PostList posts={data.posts.slice(0, 20)} />
<a href="/posts/" class="p-0 w-full">
  <p
    class="w-4/6 mx-auto my-3 p-2 text-center text-base font-bold rounded-xl ring-2"
  >
    🔽 모든 포스트 살펴보기
  </p>
</a>
