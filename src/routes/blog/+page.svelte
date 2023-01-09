<script lang="ts">
  import type { PostMetadata } from '$lib/utils/blog';
  import PostList from '$lib/components/PostList.svelte';

  export let data: { posts: PostMetadata[] } = {};
</script>

<svelte:head>
  <title>PresentKim Blog</title>
  <meta property="og:title" content="PresentKim Blog" />

  <meta name="description" content="PresentKim's Blog" />
  <meta property="og:description" content="PresentKim's Blog" />
</svelte:head>

<PostList posts={data.posts} />
