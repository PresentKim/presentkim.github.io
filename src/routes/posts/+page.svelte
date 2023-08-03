<script lang="ts">
  import type { PageData } from './$types';

  import MetaTags from '$lib/components/MetaTags.svelte';
  import PostList from '$lib/components/PostList.svelte';

  export let data: PageData;
</script>

<MetaTags pageName="전체 글 목록" description="전체 글 목록" />

<h1 class="my-4 border-b-2 border-mono6 text-2xl font-bold">전체 글 목록</h1>
<PostList posts={data.posts} />
