<script lang="ts">
  import clsx from 'clsx';

  import MetaTags from '$lib/components/MetaTags.svelte';
  import type { BojProblemMetadata } from '$lib/utils/boj';

  export let data: { infos: BojProblemMetadata[] };
</script>

<MetaTags
  pageName="해결한 BOJ 문제 목록"
  description="지금까지 해결한 BOJ 문제 목록입니다"
/>

<h1 class="my-6 text-center font-bold text-2xl">해결한 백준 문제 목록</h1>
{#each data.infos as { id, title, tier, tags }}
  <a
    data-tier={Math.floor((tier + 4) / 5)}
    class={clsx(
      'mx-1 my-2 inline-flex w-full rounded',
      'border-2 border-variable'
    )}
    href={`/boj/${id}`}
    data-sveltekit-preload-data="hover"
  >
    <img
      class="inline-block h-7 pl-1"
      alt="BOJ tier-{tier}"
      src="https://static.solved.ac/tier_small/{tier}.svg"
    />
    <p class="px-2 py-0.5 font-bold text-base">{id} {title}</p>
  </a>
{/each}

<style lang="scss">
  [data-tier='0'] {
    --variable-color: #2d2d2d;
  }

  [data-tier='1'] {
    --variable-color: #c26910;
  }

  [data-tier='2'] {
    --variable-color: #54728d;
  }

  [data-tier='3'] {
    --variable-color: #f1a311;
  }

  [data-tier='4'] {
    --variable-color: #48eab4;
  }

  [data-tier='5'] {
    --variable-color: #2bb7ef;
  }

  [data-tier='6'] {
    --variable-color: #f6307c;
  }

  [data-tier='7'] {
    --variable-color: #e080a0;
  }
</style>
