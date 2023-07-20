<script lang="ts">
  import type { PageData } from './$types';
  import MetaTag from '$lib/components/MetaTags.svelte';

  export let data: PageData;
</script>

<MetaTag pageName="전체 태그 목록" description="전체 태그 목록" />
<div class="flex flex-col divide-y divide-neutral-500">
  <h1 class="my-4 pb-2 text-4xl font-bold">Tags</h1>
  <div class="flex flex-col flex-wrap justify-center gap-4 pt-2 sm:flex-row">
    {#each Object.entries(data) as [tag, count]}
      <a
        href="/tags/{tag}"
        data-sveltekit-preload-data="hover"
        class="mx-2 my-auto flex gap-1 px-2 py-1"
      >
        <p
          class="text-2xl font-bold text-emerald-500
                 dark:text-emerald-400 sm:text-2xl"
        >
          #{tag}
        </p>
        <p class="text-xl sm:text-sm">({count})</p>
      </a>
    {/each}
  </div>
</div>
