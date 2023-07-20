<script lang="ts">
  import type { PageData } from './$types';
  import PostList from '$lib/components/PostList.svelte';
  import MetaTag from '$lib/components/MetaTags.svelte';

  export let data: PageData;
</script>

<MetaTag
  pageName="`{data.tag}` 태그의 글 목록"
  description="`{data.tag}` 태그의 글 목록"
/>

<h1 class="mx-5 mb-3 text-4xl font-bold"># {data.tag}</h1>
<PostList posts={data.posts} />
