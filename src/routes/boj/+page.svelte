<script lang="ts">
  import type { BojProblemMetadata } from '$lib/utils/boj';
  export let data: { infos: BojProblemMetadata[] };
  const infos: BojProblemMetadata[] = data.infos;
</script>

<svelte:head>
  <title>PresentKim Blog</title>
  <meta property="og:title" content="PresentKim Blog" />

  <meta name="description" content="PresentKim's Blog" />
  <meta property="og:description" content="PresentKim's Blog" />
</svelte:head>

<div>
  {#each infos as { id, title, tier, tags }}
    <a class="boj-anchor boj-tier-{0 | ((tier + 4) / 5)}" href={`/boj/${id}`}>
      <img
        class="boj-tier-icon"
        alt="BOJ tier-{tier}"
        src="https://static.solved.ac/tier_small/{tier}.svg"
      />
      {id}
      {title}
    </a>
  {/each}
</div>

<style lang="scss">
  .boj-anchor {
    display: inline-block;

    border-radius: 5px;
    background-color: var(--border-color);

    padding: 0.2rem 0.5rem;
    margin: 0.2rem 0.5rem;
  }

  a {
    --tier-color: #2a2a2a;

    color: var(--text-color);
    border: var(--tier-color) 2px solid;
  }

  .boj-tier-icon {
    display: inline-block;
    width: 12px;
  }

  .boj-tier {
    &-0 {
      --tier-color: #efefef !important;
    }

    &-1 {
      --tier-color: #c26910 !important;
    }

    &-2 {
      --tier-color: #54728d !important;
    }

    &-3 {
      --tier-color: #f1a311 !important;
    }

    &-4 {
      --tier-color: #48eab4 !important;
    }

    &-5 {
      --tier-color: #2bb7ef !important;
    }

    &-6 {
      --tier-color: #f6307c !important;
    }

    &-7 {
      --tier-color: rgb(224, 128, 160) !important;
      --tier-color: -moz-linear-gradient(
        0deg,
        rgba(255, 124, 168, 1) 0%,
        rgba(180, 145, 255, 1) 50%,
        rgba(124, 249, 255, 1) 100%
      ) !important;
      --tier-color: -webkit-linear-gradient(
        0deg,
        rgba(255, 124, 168, 1) 0%,
        rgba(180, 145, 255, 1) 50%,
        rgba(124, 249, 255, 1) 100%
      ) !important;
      --tier-color: linear-gradient(
        0deg,
        rgba(255, 124, 168, 1) 0%,
        rgba(180, 145, 255, 1) 50%,
        rgba(124, 249, 255, 1) 100%
      ) !important;
    }
  }
</style>
