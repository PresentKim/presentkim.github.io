<script lang="ts">
  import type { MdRenderResult, PostData, PostMetadata } from '$lib/utils/blog';
  import { theme } from '$lib/utils/theme';
  import site from '$lib/assets/site-info.json';
  import { page } from '$app/stores';
  import Giscus from '@giscus/svelte';

  export let data: PostData;

  let post: PostMetadata;
  let content: MdRenderResult;
  let style: string;
  let giscusTheme = 'noborder_light';
  theme.subscribe(
    (theme) =>
      (giscusTheme = theme === 'dark' ? 'transparent_dark' : 'noborder_light')
  );
  $: {
    post = data.metadata;
    content = data.content;

    style = content?.css.code ? '<' + `style>${content.css.code}</style>` : '';
  }
</script>

<svelte:head>
  {#if content.head}
    {@html content.head}
  {/if}

  {#if style}
    {@html style}
  {/if}

  <title>{post.title} - {site.title}</title>
  <meta property="og:title" content="{post.title} - {site.title}" />

  <meta name="description" content={post.summary} />
  <meta property="og:description" content={post.summary} />

  <meta property="og:type" content="article" />

  <meta name="giscus:backlink" content="{site.domain}{$page.url.pathname}" />
</svelte:head>

<h1>{post.title}</h1>
<div
  class="flex flex-row mb-6 w-full text-sm text-center
         border-b border-b-neutral-500 dark:border-b-neutral-700"
>
  <p class="py-6 my-auto text-neutral-550 dark:text-neutral-350">
    {post.formattedDate}
  </p>
  <div class="flex flex-wrap font-bold text-emerald-500 dark:text-emerald-400">
    {#each post.tags as tag}
      <a
        class="mx-1 my-auto px-2 py-1 rounded-sm bg-nestable-neutral"
        href="/tags/{tag}"
      >
        <code>#{tag}</code>
      </a>
    {/each}
  </div>
</div>

<section id="post" class="article">
  {@html content.html}

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
  theme={giscusTheme}
  lang="ko"
/>
