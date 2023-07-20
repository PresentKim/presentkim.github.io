<script lang="ts">
  import type { PageData } from './$types';
  import { giscusTheme } from '$lib/utils/theme';
  import site from '$lib/assets/site-info.json';
  import { page } from '$app/stores';
  import Giscus from '@giscus/svelte';
  import MetaTags from '$lib/components/MetaTags.svelte';
  import clsx from 'clsx';

  export let data: PageData;
</script>

<MetaTags pageName={data.title} description={data.summary} />
<svelte:head>
  <meta name="giscus:backlink" content="{site.domain}{$page.url.pathname}" />
</svelte:head>

<h1>{data.title}</h1>
<div
  class={clsx(
    'flex w-full flex-row',
    'mb-6 text-center text-sm',
    'border-b border-b-neutral-500 dark:border-b-neutral-700'
  )}
>
  <p class="my-auto py-6 text-neutral-550 dark:text-neutral-350">
    {data.formattedDate}
  </p>
  <div class="flex flex-wrap font-bold text-emerald-500 dark:text-emerald-400">
    {#each data.tags as tag}
      <a
        class="bg-nestable-neutral mx-1 my-auto rounded-sm px-2 py-1"
        href="/tags/{tag}"
      >
        <code>#{tag}</code>
      </a>
    {/each}
  </div>
</div>

<section id="post" class="article">
  {@html data.content}

  <hr />
</section>

<Giscus
  id="comments"
  repo="PresentKim/presentkim.github.io"
  repoId="R_kgDOIUl1bg"
  category="Announcements"
  categoryId="DIC_kwDOIUl1bs4CTsqQ"
  mapping="specific"
  term="📝Comments of [{$page.params.permalink}]"
  strict="1"
  reactionsEnabled="1"
  emitMetadata="0"
  inputPosition="top"
  theme={$giscusTheme}
  lang="ko"
/>
