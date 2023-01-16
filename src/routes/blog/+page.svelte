<script lang="ts">
  import type { PostMetadata } from '$lib/utils/blog';
  import PostList from '$lib/components/PostList.svelte';

  export let data: { posts: PostMetadata[] } = {};
</script>

<svelte:head>
  <title>포스트 목록 - 현재는 개발중</title>
  <meta property="og:title" content="포스트 목록 - 현재는 개발중" />

  <meta name="description" content="현재는 개발중 블로그의 포스트 목록" />
  <meta property="og:description" content="현재는 개발중 블로그의 포스트 목록" />
</svelte:head>

<PostList posts={data.posts} />
