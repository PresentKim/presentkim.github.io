<script lang="ts">
  import clsx from 'clsx';

  import type { PageData } from './$types';

  import MetaTags from '$lib/components/MetaTags.svelte';
  import PostList from '$lib/components/PostList.svelte';

  export let data: PageData;
</script>

<MetaTags />

<div id="recent-posts">
  <h1 class="my-4 border-b-2 border-mono-200 pb-4 text-2xl font-bold">
    최근 포스트
  </h1>

  <PostList posts={data.posts} />
  <a href="/posts/" class="my-2 rounded-xl p-2 ring-2 ring-secondary">
    <p
      class={clsx('mx-auto my-3 grayscale', 'text-center text-base font-bold')}
    >
      🔽 모든 포스트 살펴보기
    </p>
  </a>
</div>
