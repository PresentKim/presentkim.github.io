<script lang="ts">
  export let shorten: boolean = false;
</script>

<div class="select-none overflow-hidden w-44 max-xs:w-32 {shorten ? 'shorten w-8 max-xs:w-6' : ''}">
  <a href="/" data-sveltekit-preload-data="hover" aria-label="메인페이지로 이동">
    <svg class="h-8 max-xs:h-6 my-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 315 42">
      <g class="fill-none stroke-round stroke-[6px]">
        <g id="code-wrap" class="stroke-emerald-500">
          <path class="translate-x-[000px]" d="M16,06 04,20 16,36" />
          <path class="translate-x-[170px]" d="M04,36 16,06" />
          <path class="translate-x-[190px]" d="M04,06 16,20 04,36" />
        </g>
        <g id="name-chars" class="stroke-current">
          <path class="translate-x-[044px]" d="M04,36 04,06 18,06 18,20 04,20 13,20 18,36" />
          <path class="translate-x-[022px]" d="M04,36 04,06 18,06 18,20 04,20" />
          <path class="translate-x-[066px]" d="M18,06 04,06 04,21 18,21 04,21 04,36 18,36" />
          <path class="translate-x-[088px]" d="M18,06 04,06 04,21 18,21 18,36 04,36" />
          <path class="translate-x-[110px]" d="M18,06 04,06 04,21 18,21 04,21 04,36 18,36" />
          <path class="translate-x-[132px]" d="M04,36 04,06 18,36 18,06" />
          <path class="translate-x-[154px]" d="M04,06 18,06 11,06 11,36" />
        </g>
      </g>
    </svg>
  </a>
  <p class="font-extrabold scale-y-150">&lt현재는 개발중/&gt</p>
</div>

<style lang="scss">
  svg path {
    @apply duration-500 ease-spring;
    transition-property: transform, stroke;
  }

  .shorten {
    path {
      @apply translate-x-[002px] translate-y-[002px] stroke-[#0000] -skew-y-6;
    }

    #name-chars path {
      &:nth-child(1) {
        @apply stroke-emerald-900;
      }

      &:nth-child(2) {
        @apply stroke-emerald-500;
      }
    }
  }
</style>
