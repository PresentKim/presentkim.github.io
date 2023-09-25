<script lang="ts">
  import clsx from 'clsx';

  import type { PageData } from './$types';

  import MetaTag from '$lib/components/MetaTags.svelte';
  import PostList from '$lib/components/PostList.svelte';

  export let data: PageData;
</script>

<MetaTag pageName="전체 태그 목록" description="전체 태그 목록" />

<div
  class={clsx(
    'flex flex-col sm:flex-row',
    'divide-y divide-mono-100 sm:divide-x sm:divide-y-0'
  )}
>
  <h1 class="my-4 pb-2 text-2xl font-bold">전체 태그 목록</h1>
  <div
    class={clsx(
      'justify-left flex flex-col flex-wrap sm:flex-row',
      'gap-2 pt-2'
    )}
  >
    {#each Object.entries(data) as [tag, count]}
      <a
        href="/tags/{tag}"
        data-sveltekit-preload-data="hover"
        class="mx-2 my-auto flex gap-1 px-2 py-1"
      >
        <p class="text-xl font-bold text-primary">
          #{tag}
        </p>
        <p class="text-sm">({count})</p>
      </a>
    {/each}
  </div>
</div>
