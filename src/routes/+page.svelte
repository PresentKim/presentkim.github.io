<script lang="ts">
  import type { PageData } from './$types';
  import PostList from '$lib/components/PostList.svelte';

  import MetaTags from '$lib/components/MetaTags.svelte';
  import clsx from 'clsx';
  export let data: PageData;
</script>

<MetaTags />

<h1 class="mb-5 block text-3xl">
  전체 포스트
  <p class="inline text-sm">({data.posts.length})</p>
</h1>

<PostList posts={data.posts} />
<a href="/posts/" class="w-full p-0">
  <p
    class={clsx(
      'mx-auto my-3 w-4/6 rounded-xl p-2',
      'text-center text-base font-bold ring-2'
    )}
  >
    🔽 모든 포스트 살펴보기
  </p>
</a>
