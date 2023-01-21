<script lang="ts">
  export let open: boolean = false;
</script>

<label class="block select-none w-8 max-xs:w-6 sm:w-0 my-auto">
  <input type="checkbox" class="hidden" bind:checked={open} />
  <svg
    class="fill-none stroke-round stroke-[6px] stroke-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
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
