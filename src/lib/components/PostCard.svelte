<script lang="ts">
  import clsx from 'clsx';

  export let title: string;
  export let summary: string;
  export let date: string;
  export let tags: string[];
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

  <div class="flex flex-row items-center gap-1">
    <i class="calendar before:text-sm" />
    <p class="mr-4 text-sm text-mono-500">
      {date}
    </p>
    <i class="tags before:text-sm" />
    <p class="text-sm text-mono-500">
      {tags.join(', ')}
    </p>
  </div>
</div>
