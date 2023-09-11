<script lang="ts">
  import clsx from 'clsx';

  import MetaTags from '$lib/components/MetaTags.svelte';
</script>

<MetaTags />

<div
  class="relative mb-2 mt-8 items-center justify-center self-center text-center"
>
  <div
    class={clsx(
      'overflow-hidden rounded-full shadow-2xl ring-8 ring-mono-200',
      'w-44 xs:w-56',
      'transition-shape ease-in-out-200'
    )}
  >
    <img
      src="https://avatars.githubusercontent.com/u/13284800?v=4"
      alt="Profile"
      class={clsx(
        'select-prevent origin-center cursor-pointer',
        'scale-100 transition duration-500 hover:scale-125 active:scale-125'
      )}
    />
  </div>
  <div
    class={clsx(
      'absolute m-auto flex items-center justify-center',
      'bottom-1 right-1 xs:bottom-2.5 xs:right-2.5',
      'sm:h-13 sm:w-13 h-10 w-10',
      'rounded-full bg-background shadow-2xl ring-8 ring-mono-200',
      'transition-[width_height_bottom_right] ease-in-out-200'
    )}
  >
    <p>😎</p>
  </div>
</div>
<div class="mt-4 flex flex-col self-center text-center">
  <h1>김현재 <code>PresentKim</code></h1>
  <h4 class="text-mono-500">공부하는 개발자</h4>
  <div class="mt-6 flex flex-col gap-2 text-left font-semibold">
    <p>
      <a href="/posts">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1024"
          height="1024"
          viewBox="0 0 42 42"
          class={clsx(
            'ml-1 inline-block h-5 w-5 text-center',
            'stroke-round fill-none stroke-[6px]',
            'group-hover:[&_path]:stroke-primary',
            '[&_path]:transition-all [&_path]:ease-in-out-200'
          )}
        >
          <path
            class={clsx(
              'stroke-primary brightness-50 group-hover:brightness-100',
              'group-hover:-translate-y-[3px] group-hover:translate-x-[7px]'
            )}
            d="M17 37V10l14-4v12l-14 4m11-2 4 17"
          />
          <path
            class={clsx('stroke-primary', 'group-hover:-translate-x-[10px]')}
            d="M13 35V7l14-4v12l-14 4"
          />
        </svg> Dev Blog
      </a>
    </p>
    <p>
      <a href="https://github.com/PreentKim">
        <i class="github" /> PresentKim
      </a>
    </p>
    <p>
      <a href="mailto:contact@present.kim">
        <i class="mail" /> contact@present.kim
      </a>
    </p>
    <p><i class="location" /> Gyeonggi-do, Republic of Korea</p>
  </div>
</div>
