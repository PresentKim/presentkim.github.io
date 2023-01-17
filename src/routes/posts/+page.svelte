<script lang="ts">
  import type { PostMetadata } from '$lib/utils/blog';
  import PostList from '$lib/components/PostList.svelte';

  export let data: { posts: PostMetadata[] } = {};
</script>

<svelte:head>
  <title>Posts - 현재는 개발중</title>
  <meta property="og:title" content="Posts - 현재는 개발중" />

  <meta name="description" content="현재는 개발중 블로그의 포스트들을 확인해보세요" />
  <meta property="og:description" content="현재는 개발중 블로그의 포스트들을 확인해보세요" />
</svelte:head>

<PostList posts={data.posts} />
