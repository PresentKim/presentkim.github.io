<script lang="ts">
  import type { PageData } from './$types';

  import MetaTag from '$lib/components/MetaTags.svelte';
  import PostList from '$lib/components/PostList.svelte';

  export let data: PageData;
</script>

<MetaTag
  pageName="`{data.tag}` 태그의 글 목록"
  description="`{data.tag}` 태그의 글 목록"
/>

<h1 class="border-mono6 my-4 border-b-2 text-2xl font-bold">
  <code class="rounded bg-primary bg-opacity-10 px-2 py-1 text-primary"
    >#{data.tag}</code
  > 태그의 글 목록
</h1>
<PostList posts={data.posts} />
