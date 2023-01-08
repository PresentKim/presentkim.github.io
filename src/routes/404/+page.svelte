<script>
  import { onMount } from 'svelte';

  let path = ' ';
  onMount(() => (path = window.location.pathname));
</script>

<div class="container mx-auto text-center">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="mx-auto px-20 w-full md:w-4/6 xl:w-1/2 animate-pulse"
    viewBox="0 0 64 58"
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
  <div class="justify-center text-4xl">
    Page [<strong class="underline decoration-red-600">{path.substring(1)}</strong>] does not exist.
    <br /><br />
    Going to
    <a class="font-bold underline decoration-green-500 dark:decoration-green-400" href="/">
      Main page!
    </a>
  </div>
</div>
