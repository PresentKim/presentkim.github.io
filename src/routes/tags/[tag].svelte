<script context="module">
  import { findPostsByTag } from '$lib/utils/posts';

  export function preload(page) {
    const { tag } = page.params;
    const posts = findPostsByTag(tag);
    return { tag, posts };
  }
</script>

<script>
  // props are provided by preload() function
  import PostList from '../../lib/components/PostList.svelte';

  export let tag, posts;

  posts.sort((a, b) => b.date - a.date);
</script>

<svelte:head>
  <title>PresentKim Blog : {tag}</title>
  <meta og:title="PresentKim Blog Tag: {tag}" />
  <meta name="description" content="PresentKim Blog Tag: {tag}" />
  <meta og:description="PresentKim Blog Tag: {tag}" />
</svelte:head>

<!-- show #tag as title -->
<h1>#{tag}</h1>

<PostList {posts} />
