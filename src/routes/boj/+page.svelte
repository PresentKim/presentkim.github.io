<script lang="ts">
  import type { BojInfoHeader } from '$lib/utils/boj';

  export let data: { infos: BojInfoHeader[] };
  const infos: BojInfoHeader[] = data.infos;
</script>

<svelte:head>
  <title>PresentKim Blog</title>
  <meta property="og:title" content="PresentKim Blog" />

  <meta name="description" content="PresentKim's Blog" />
  <meta property="og:description" content="PresentKim's Blog" />
</svelte:head>

<div>
  {#each infos as { id, title, tier, tags }}
    <a class="problem-link problem-tier-class{0 | ((tier + 4) / 5)}" href={`/boj/${id}`}>
      <img
        class="problem-tier-icon"
        alt="tier{tier}"
        src="https://static.solved.ac/tier_small/{tier}.svg"
      />
      {id}
      {title}
    </a>
  {/each}
</div>

<style lang="scss">
  .problem-link {
    display: inline-block;

    border-radius: 5px;
    background-color: var(--border-color);

    padding: 0.2rem 0.5rem;
    margin: 0.2rem 0.5rem;
  }

  a {
    --tier-secondary: #2a2a2a;

    color: var(--text-color);
    border: var(--tier-secondary) 2px solid;
  }

  .problem-tier {
    &-icon {
      display: inline-block;
      width: 12px;
    }

    &-class0 {
      --tier-secondary: #efefef !important;
    }

    &-class1 {
      --tier-secondary: #c26910 !important;
    }

    &-class2 {
      --tier-secondary: #54728d !important;
    }

    &-class3 {
      --tier-secondary: #f1a311 !important;
    }

    &-class4 {
      --tier-secondary: #48eab4 !important;
    }

    &-class5 {
      --tier-secondary: #2bb7ef !important;
    }

    &-class6 {
      --tier-secondary: #f6307c !important;
    }

    &-class7 {
      --tier-secondary: rgb(224, 128, 160) !important;
      --tier-secondary: -moz-linear-gradient(
        0deg,
        rgba(255, 124, 168, 1) 0%,
        rgba(180, 145, 255, 1) 50%,
        rgba(124, 249, 255, 1) 100%
      ) !important;
      --tier-secondary: -webkit-linear-gradient(
        0deg,
        rgba(255, 124, 168, 1) 0%,
        rgba(180, 145, 255, 1) 50%,
        rgba(124, 249, 255, 1) 100%
      ) !important;
      --tier-secondary: linear-gradient(
        0deg,
        rgba(255, 124, 168, 1) 0%,
        rgba(180, 145, 255, 1) 50%,
        rgba(124, 249, 255, 1) 100%
      ) !important;
    }
  }
</style>
