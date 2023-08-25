<script lang="ts">
  import clsx from 'clsx';

  export let title: string;
  export let summary: string;
  export let date: string;
  export let tags: string[] = [];
</script>

<div
  class={clsx(
    'flex w-full flex-col rounded-xl bg-mono-200 p-3',
    'border-[1px] border-mono-100 shadow'
  )}
>
  <h2 class="line-clamp-1 font-bold text-base">
    {title}
  </h2>
  <p
    class="my-3 line-clamp-2 overflow-hidden text-ellipsis text-mono-500 text-sm"
  >
    {summary}
  </p>

  <p class="text-right text-mono-500 text-sm">
    {date}
  </p>
</div>
