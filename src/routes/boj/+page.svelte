<script lang="ts">
  import type { BojProblemMetadata } from '$lib/utils/boj';

  export let data: { infos: BojProblemMetadata[] };
</script>

<svelte:head>
  <title>현재는 개발중</title>
  <meta property="og:title" content="현재는 개발중" />

  <meta name="description" content="PresentKim's Blog" />
  <meta property="og:description" content="PresentKim's Blog" />
</svelte:head>

<h1 class="text-center text-4xl font-bold my-10">해결한 BOJ 문제 목록</h1>
{#each data.infos as { id, title, tier, tags }}
  <a
    data-tier={Math.floor((tier + 4) / 5)}
    class="inline-flex w-full rounded mx-1 my-2 border-variable border-2 font-bold text-xl"
    href={`/boj/${id}`}
  >
    <img
      class="inline-block h-7 pl-1"
      alt="BOJ tier-{tier}"
      src="https://static.solved.ac/tier_small/{tier}.svg"
    />
    <p class="px-2 py-0.5">{id} {title}</p>
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
