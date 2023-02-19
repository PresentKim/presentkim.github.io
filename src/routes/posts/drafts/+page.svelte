<script lang="ts">
  import type { PostMetadata } from '$lib/utils/blog';
  import PostList from '$lib/components/PostList.svelte';

  export let data: { posts: PostMetadata[] } = {};
</script>

<svelte:head>
  <title>Draft Posts - 현재는 개발중</title>
  <meta property="og:title" content="Draft Posts - 현재는 개발중" />

  <meta name="description" content="현재는 개발중 블로그의 작성중인 포스트를 확인해보세요" />
  <meta property="og:description" content="현재는 개발중 블로그의 작성중인 포스트를 확인해보세요" />
</svelte:head>

<PostList posts={data.posts} />
