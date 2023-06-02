<script lang="ts">
  import type { PostMetadata } from '$lib/utils/blog';
  import PostList from '$lib/components/PostList.svelte';

  export let data: { posts: PostMetadata[] } = {};
</script>

<svelte:head>
  <title>현재는 개발중</title>
  <meta property="og:title" content="현재는 개발중" />

  <meta name="description" content="프로그래밍을 좋아하는 김현재의 개발 블로그입니다" />
  <meta property="og:description" content="프로그래밍을 좋아하는 김현재의 개발 블로그입니다" />

  <meta property="og:type" content="website" />
</svelte:head>

<hr class="my-4" />
<h1 class="text-3xl mb-5">블로그의 최신 포스트</h1>
<PostList posts={data.posts.slice(0, 5)} />
<a href="/posts/" class="p-0">
  <p
    class="w-4/6 mx-auto my-3 p-2 text-center text-base font-bold rounded-xl ring-2 bg-emerald-400 dark:bg-emerald-500"
  >
    🔽 모든 포스트 살펴보기
  </p></a
>
