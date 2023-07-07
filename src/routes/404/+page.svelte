<script>
  import { title } from '$lib/assets/site-info.json';
</script>

<svelte:head>
  <title>페이지를 찾을 수 없습니다 - {title}</title>
  <meta property="og:title" content="페이지를 찾을 수 없습니다 - {title}" />

  <meta name="description" content="페이지를 찾을 수 없습니다" />
  <meta property="og:description" content="페이지를 찾을 수 없습니다" />
</svelte:head>

<svg
  xmlns="http://www.w3.org/2000/svg"
  role="img"
  viewBox="0 0 64 58"
  class="mx-auto px-20 w-full animate-pulse"
>
  <defs>
    <g id="paper-file">
      <rect rx="1" class="fill-neutral-100" y="6" width="34" height="42" />
      <rect rx="1" class="fill-none stroke-black stroke-[0.3]" y="6" width="34" height="42" />
      <rect rx="1" class="fill-neutral-200" x="3" y="8" width="28" height="38" />
      <rect rx="1" class="fill-emerald-600" x="6" y="4" width="20" height="6" />
      <circle r="2" class="fill-none stroke-emerald-600 stroke-[1.5]" cx="16" cy="2" />
    </g>
  </defs>
  <use href="#paper-file" class="-rotate-12" x="-2" y="6" />
  <use href="#paper-file" x="25" y="9" />
</svg>
<div class="justify-center text-center text-4xl">페이지를 찾을 수 없습니다.</div>
