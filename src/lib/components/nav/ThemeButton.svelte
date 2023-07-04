<script>
  import { toggleTheme } from '$lib/utils/theme.ts';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  role="button"
  tabindex="0"
  viewBox="0 0 50 50"
  class="w-8 max-xs:w-6 my-auto select-none"
  on:mousedown={toggleTheme}
>
  <mask id="moonMask">
    <rect class="fill-white" width="50" height="50" />
    <circle class="fill-black origin-top-right scale-0 dark:scale-100" cx="34" cy="14" r="16" />
  </mask>

  <g mask="url(#moonMask)">
    <circle class="fill-current scale-50 dark:scale-125" cx="25" cy="25" r="16" />

    <g class="fill-none stroke-current stroke-round stroke-[5px] scale-100 dark:scale-0">
      <line x1="4" y1="25" x2="12" y2="25" />
      <line x1="46" y1="25" x2="38" y2="25" />
      <line x1="25" y1="4" x2="25" y2="12" />
      <line x1="25" y1="46" x2="25" y2="38" />
      <line x1="10" y1="10" x2="15" y2="15" />
      <line x1="40" y1="40" x2="35" y2="35" />
      <line x1="10" y1="40" x2="15" y2="35" />
      <line x1="40" y1="10" x2="35" y2="15" />
    </g>
  </g>
</svg>

<style>
  svg * {
    @apply origin-center transition-transform duration-500 ease-spring;
  }
</style>
