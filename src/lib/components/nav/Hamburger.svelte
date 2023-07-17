<script lang="ts">
  import { runOnEnter } from '$lib/utils/utils';

  export let open: boolean = false;
  export let tabindex: number = 0;

  let input: HTMLInputElement;
</script>

<label class="block select-none w-7 sm:w-8 my-auto">
  <input type="checkbox" class="hidden" bind:this={input} bind:checked={open} />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="button"
    viewBox="0 0 50 50"
    {tabindex}
    on:keydown={runOnEnter(() => input.click())}
    class="fill-none stroke-round stroke-[6px] stroke-current"
  >
    <path class="-translate-y-3" d="M04,25 46,25" />
    <path d="M04,25 46,25" />
    <path class="translate-y-3" d="M04,25 46,25" />
  </svg>
</label>

<style lang="scss">
  svg path {
    @apply transition-transform duration-500 ease-spring origin-center;
  }

  input:checked + svg path {
    @apply translate-y-0;
    @apply rotate-45;

    &:last-child {
      @apply -rotate-45;
    }
  }
</style>
