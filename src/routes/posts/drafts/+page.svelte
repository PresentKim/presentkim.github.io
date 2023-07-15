<script lang="ts">
  import type { PostInfo } from '$lib/utils/blog';
  import PostList from '$lib/components/PostList.svelte';
  import MetaTags from '$lib/components/MetaTags.svelte';

  export let data: { posts: PostInfo[] };
</script>

<MetaTags pageName="작성중인 글 목록" description="작성중인 글 목록" />

<PostList posts={data.posts} />
