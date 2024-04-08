<script lang="ts">
  import { page } from '$app/stores';

  import {
    author,
    description as defaultDescription,
    domain,
    name
  } from '$lib/assets/site-info.json';

  export let pageName: string = '';
  export let description: string = defaultDescription;
  export let preview: string = '';

  let title: string;
  let url: string = `${domain}${$page.url.pathname}`;

  console.log($page.url.pathname);
  $: title = pageName ? `${pageName} - ${name}` : name;
</script>

<svelte:head>
  <!-- HTML Meta Tags -->
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="creator" content={author} />
  <meta name="publisher" content={author} />
  <meta name="author" content={author} />
  <meta name="canonical" content={url} />
  <link rel="canonical" href={url} />
  <link
    rel="sitemap"
    type="application/xml"
    title="Sitemap"
    href="/sitemap.xml"
  />
  <link rel="self" type="application/atom+xml" href="/atom.xml" />

  <link
    rel="alternate"
    href="/rss.xml"
    type="application/rss+xml"
    title="RSS"
  />

  <meta name="robots" content="index, follow" />
  <meta name="generator" content="SvelteKit v1.20.5" />

  <!-- Google / Search Engine Tags -->
  <meta itemprop="name" content={title} />
  <meta itemprop="description" content={description} />
  {#if preview}
    <meta itemprop="image" content={preview} />
  {/if}

  <!-- Facebook Meta Tags -->
  <meta property="og:type" content="article" />
  <meta property="og:locale" content="ko_KR" />
  <meta property="og:url" content={url} />
  <meta property="og:name" content={name} />
  <meta property="og:title" content={title} />
  <meta property="og:article:author" content={author} />
  <meta property="og:description" content={description} />
  {#if preview}
    <meta itemprop="image" content={preview} />
    <meta property="og:image:alt" content={title} />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="628" />
  {/if}

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:domain" content={domain} />
  <meta name="twitter:description" content={description} />
  {#if preview}
    <meta name="twitter:image" content={preview} />
  {/if}
</svelte:head>
