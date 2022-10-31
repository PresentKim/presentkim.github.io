<script>
  import {onMount} from 'svelte';

  export let segment;

  import {spring} from 'svelte/motion';

  let isHome = segment === undefined, isMobile = false;
  let innerWidth = 0, innerHeight = 0;
  const duration = spring(isHome ? 1.0 : 0.0, {
    stiffness: 0.01,
    damping: 0.2,
  });

  let el, vmin, size, marginTop, marginLeft, backgroundOpacity;
  $: {
    isHome = segment === undefined;
    if (isHome) {
      duration.set(1.0);
    } else {
      duration.set(0.0);
    }

    vmin = Math.min(innerWidth, innerHeight) / 100;
    size = 36 + (isMobile ? 192 : 256) * $duration;
    marginTop = vmin * 5 * $duration;
    marginLeft = Math.max(0, innerWidth / 2 * $duration - size / 2);
    backgroundOpacity = $duration;
  }

  onMount(() => {
    const mediaQuery = window.matchMedia('(max-width: 600px)');
    isMobile = mediaQuery.matches;
    mediaQuery.addEventListener('change', e => {
      isMobile = e.matches;
    });
  });
</script>

<style>
    a {
        display: inline-block;
        padding: 0.5rem;

        border-radius: 50%;
        transition: background-color 0.2s linear;
    }

    a.isHome {
        background-color: var(--border-color);
    }
</style>

<svelte:window bind:innerWidth={innerWidth} bind:innerHeight={innerHeight}/>

<a href="/" class:isHome bind:this={el} style="margin-top: {marginTop}px; margin-left: {marginLeft}px;">
    <svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="0 0 512 512">
        <g fill="#216044" transform="matrix(-1 0 0 1 635 6)">
            <rect width="60" height="352.8" x="-473" y="114" rx="30" ry="30" transform="matrix(-1 0 0 1 -1 -8)"/>
            <rect width="59.7" height="225" x="-399" y="173" rx="30" ry="30"
                  transform="matrix(-.98441 -.17586 -.22304 .9748 -1 -8)"/>
            <rect width="60" height="215" x="-5" y="281" rx="30" ry="30" transform="scale(-1 1) rotate(75 6 -4)"/>
            <rect width="60" height="215.7" x="115" y="312" rx="30" ry="30" transform="scale(-1 1) rotate(75 6 -4)"/>
            <rect width="58.7" height="177.5" x="-322" y="77" rx="30" ry="30" transform="matrix(-1 0 0 1 -1 -8)"/>
        </g>
        <g fill="#3eaf7c" transform="translate(111 -2)">
            <rect width="60" height="352.8" x="40" y="110" rx="30" ry="30" transform="translate(-1 -8)"/>
            <rect width="60" height="215" x="123" y="-216" rx="30" ry="30" transform="rotate(75 5 -5)"/>
            <rect width="60" height="215.7" x="244" y="-185" rx="30" ry="30" transform="rotate(75 5 -5)"/>
            <rect width="58.7" height="177.5" x="191" y="73" rx="30" ry="30" transform="translate(-1 -8)"/>
        </g>
    </svg>
</a>