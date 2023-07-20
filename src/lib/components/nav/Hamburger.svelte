<script lang="ts">
  import { runOnEnter } from '$lib/utils/utils';

  export let open: boolean = false;
  export let tabindex: number = 0;

  let input: HTMLInputElement;
</script>

<label class="my-auto block w-7 select-none sm:w-8">
  <input type="checkbox" class="hidden" bind:this={input} bind:checked={open} />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="button"
    viewBox="0 0 50 50"
    {tabindex}
    on:keydown={runOnEnter(() => input.click())}
    class="stroke-round fill-none stroke-current stroke-[6px]"
  >
    <path class="-translate-y-3" d="M04,25 46,25" />
    <path d="M04,25 46,25" />
    <path class="translate-y-3" d="M04,25 46,25" />
  </svg>
</label>

<style lang="scss">
  svg path {
    @apply origin-center transition-transform duration-500 ease-spring;
  }

  input:checked + svg path {
    @apply translate-y-0;
    @apply rotate-45;

    &:last-child {
      @apply -rotate-45;
    }
  }
</style>
