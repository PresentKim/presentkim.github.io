<script lang="ts">
  import type { PostInfo } from '$lib/utils/blog';
  import PostList from '$lib/components/PostList.svelte';
  import { title } from '$lib/assets/site-info.json';

  export let data: { posts: PostInfo[] };
</script>

<svelte:head>
  <title>Draft Posts - {title}</title>
  <meta property="og:title" content="Draft Posts - {title}" />

  <meta
    name="description"
    content="{title} 블로그의 작성중인 포스트를 확인해보세요"
  />
  <meta
    property="og:description"
    content="{title} 블로그의 작성중인 포스트를 확인해보세요"
  />
</svelte:head>

<PostList posts={data.posts} />
