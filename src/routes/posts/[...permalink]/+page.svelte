<script lang="ts">
  import Giscus from '@giscus/svelte';
  import clsx from 'clsx';

  import { page } from '$app/stores';
  import type { PageData } from './$types';

  import site from '$lib/assets/site-info.json';
  import MetaTags from '$lib/components/MetaTags.svelte';
  import { giscusTheme } from '$lib/utils/theme';

  export let data: PageData;
</script>

<MetaTags pageName={data.title} description={data.summary} />
<svelte:head>
  <meta name="giscus:backlink" content="{site.domain}{$page.url.pathname}" />
</svelte:head>

<h1 class="my-2 text-xl">{data.title}</h1>
<div
  class={clsx(
    'flex w-full flex-row',
    'mb-6 text-center text-sm',
    'border-b border-mono-200'
  )}
>
  <p class="my-auto py-6 text-mono-500">
    {data.formattedDate}
  </p>
  <div class="flex flex-wrap font-bold text-primary">
    {#each data.tags as tag}
      <a
        class="mx-1 my-auto rounded-sm bg-foreground bg-opacity-5 px-2 py-1"
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

<div class="rounded-2xl border border-mono-200 px-2 py-4 shadow">
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
</div>
