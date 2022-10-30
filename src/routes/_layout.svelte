<script>
  import '../global.css';

  import hljs from 'highlight.js/lib/core';
  import javascript from 'highlight.js/lib/languages/javascript';
  import java from 'highlight.js/lib/languages/java';
  import kotlin from 'highlight.js/lib/languages/kotlin';
  import php from 'highlight.js/lib/languages/php';
  import cpp from 'highlight.js/lib/languages/cpp';

  import ThemeButton from '../components/ThemeButton.svelte';
  import LogoButton from '../components/LogoButton.svelte';
  import {onMount} from 'svelte';
  import {fly} from 'svelte/transition';

  /** @type {Record<string, import('highlight.js').LanguageFn>} */
  const languages = {js: javascript, javascript, java, kotlin, php, cpp};
  for (const [name, language] of Object.entries(languages)) {
    hljs.registerLanguage(name, language);
  }

  export let segment;

  onMount(() => {
    document.querySelectorAll('pre code').forEach((el) => {
      el.innerHTML = el.innerHTML.replaceAll('<', '&lt;').replaceAll('>', '&gt;');
      hljs.highlightElement(el);
    });
  });
</script>

<style>
    header {
        margin: 0 0;
        width: 100%;

        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }

    main {
        margin: 0 0;
        width: 100%;
    }
</style>

<header>
    <LogoButton {segment}/>
    <ThemeButton/>
</header>

<main>
    {#key segment}
        <div
                in:fly="{{ y: -50, duration: 250}}"
                out:fly="{{ y: 50, duration: 250 }}"
        >
            <slot></slot>
        </div>
    {/key}
</main>