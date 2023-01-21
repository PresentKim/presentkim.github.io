<script lang="ts">
  export let shorten: boolean = false;
</script>

<div
  class="select-none overflow-hidden w-60 max-xs:w-56
         transition-shape duration-500 ease-spring
         {shorten ? 'shorten w-8 max-xs:w-6' : ''}"
>
  <a href="/" data-sveltekit-preload-data="hover" aria-label="메인페이지로 이동">
    <svg class="h-8 max-xs:h-6 my-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 42">
      <g class="fill-none stroke-round stroke-[6px]">
        <g id="pr">
          <path class="stroke-emerald-900" d="M04,37 V9 l14,-4 v12 l-14,4 m11,-2 4,17" />
          <path class="stroke-emerald-500" d="M03,36 V8 l14,-4 v12 l-14,4" />
        </g>
        <g id="name" class="stroke-current stroke-[5px]">
          <g id="hyeun" class="[&>*]:translate-x-[40px]">
            <path d="M00,10 16,10M08,10 08,06" />
            <circle r="6" cx="08" cy="17" />
            <path d="M23,06 23,27M20,14 23,14 23,20 20,20" />
            <path d="M06,29 06,36 24,36" />
          </g>
          <g id="jae" class="[&>*]:translate-x-[70px]">
            <path d="M00,10 12,10 06,10 06,17M02,32 06,17 12,32" />
            <path d="M18,06 18,36 18,21 24,21 24,06, 24,36" />
          </g>
          <g id="neon" class="[&>*]:translate-x-[100px]">
            <path d="M03,06 03,15 22,15" />
            <path d="M00,23 24,23" />
            <path d="M03,29 03,36 22,36" />
          </g>
          <g id="gae" class="[&>*]:translate-x-[140px]">
            <path d="M02,08 12,08 08,35" />
            <path d="M19,06 19,36 19,21 25,21 25,06, 25,36" />
          </g>
          <g id="bal" class="[&>*]:translate-x-[170px]">
            <path d="M03,06 03,19 14,19 14,06 14,11 03,11" />
            <path d="M22,06 22,20 22,11 27,11" />
            <path class="stroke-[4px]" d="M04,26 23,26 23,31 04,31 04,36 23,36" />
          </g>
          <g id="jung" class="[&>*]:translate-x-[210px]">
            <path d="M05,07 23,07 14,07 14,12M05,17 14,12 23,17" />
            <path d="M03,23 25,23 14,23 15,28" />
            <ellipse class="stroke-[4.5px]" rx="9" ry="4" cx="14" cy="33" />
          </g>
        </g>
      </g>
    </svg>
  </a>
</div>

<style lang="scss">
  * {
    @apply duration-500 ease-spring;
    transition-property: transform, stroke;
  }

  .shorten #name {
    path,
    circle,
    ellipse {
      @apply translate-x-px translate-y-px stroke-[#0000];
    }
  }
</style>
