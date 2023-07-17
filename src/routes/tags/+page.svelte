<script lang="ts">
  import MetaTag from '$lib/components/MetaTags.svelte';

  export let data: Record<string, number>;
</script>

<MetaTag pageName="전체 태그 목록" description="전체 태그 목록" />
<div class="flex flex-col divide-y divide-neutral-500">
  <h1 class="text-4xl font-bold my-4 pb-2">Tags</h1>
  <div class="flex flex-col sm:flex-row flex-wrap justify-center pt-2 gap-4">
    {#each Object.entries(data) as [tag, count]}
      <a
        href="/tags/{tag}"
        data-sveltekit-preload-data="hover"
        class="flex gap-1 mx-2 my-auto px-2 py-1"
      >
        <p
          class="font-bold text-2xl sm:text-2xl text-emerald-500 dark:text-emerald-400"
        >
          #{tag}
        </p>
        <p class="text-xl sm:text-sm">({count})</p>
      </a>
    {/each}
  </div>
</div>
