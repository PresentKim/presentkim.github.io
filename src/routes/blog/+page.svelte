<script lang="ts">
  import type { PostData } from '$lib/components/blog';
  import { PostList } from '$lib/components/blog';

  export let data;
  const posts: PostData[] = data.posts;
</script>

<svelte:head>
  <title>PresentKim Blog</title>
  <meta property="og:title" content="PresentKim Blog" />

  <meta name="description" content="PresentKim's Blog" />
  <meta property="og:description" content="PresentKim's Blog" />
</svelte:head>

<PostList {posts} />
