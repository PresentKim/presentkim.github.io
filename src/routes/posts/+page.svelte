<script lang="ts">
  import type { PageData } from './$types';
  import PostList from '$lib/components/PostList.svelte';
  import MetaTags from '$lib/components/MetaTags.svelte';

  export let data: PageData;
</script>

<MetaTags pageName="전체 글 목록" description="전체 글 목록" />

<PostList posts={data.posts} />
