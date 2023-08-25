<script lang="ts">
  import clsx from 'clsx';

  import type { PageData } from './$types';

  import MetaTags from '$lib/components/MetaTags.svelte';
  import PostList from '$lib/components/PostList.svelte';

  export let data: PageData;
</script>

<MetaTags />

<h1 class="my-4 border-b-2 border-mono-200 pb-4 font-bold text-2xl">
  최근 포스트
</h1>

<PostList posts={data.posts} />
<a href="/posts/" class="my-2 w-full rounded-xl p-2 ring-2 ring-secondary">
  <p
    class={clsx(
      'mx-auto my-3 w-4/6 grayscale',
      'text-center font-bold text-base'
    )}
  >
    🔽 모든 포스트 살펴보기
  </p>
</a>
