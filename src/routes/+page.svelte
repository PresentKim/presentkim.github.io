<script lang="ts">
  import type { PageData } from './$types';
  import PostList from '$lib/components/PostList.svelte';

  import MetaTags from '$lib/components/MetaTags.svelte';
  export let data: PageData;
</script>

<MetaTags />

<h1 class="block text-3xl mb-5">
  전체 포스트
  <p class="text-sm inline">({data.posts.length})</p>
</h1>

<PostList posts={data.posts} />
<a href="/posts/" class="p-0 w-full">
  <p
    class="w-4/6 mx-auto my-3 p-2 text-center text-base font-bold rounded-xl ring-2"
  >
    🔽 모든 포스트 살펴보기
  </p>
</a>
