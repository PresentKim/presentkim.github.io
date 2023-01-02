<script lang="ts">
  import type { PostMetadata } from '$lib/components/blog';
  import { PostList } from '$lib/components/blog';

  export let data: { posts: PostMetadata[] } = {};
  const posts = data.posts;
</script>

<svelte:head>
  <title>PresentKim Blog</title>
  <meta property="og:title" content="PresentKim Blog" />

  <meta name="description" content="PresentKim's Blog" />
  <meta property="og:description" content="PresentKim's Blog" />
</svelte:head>

<PostList {posts} />
