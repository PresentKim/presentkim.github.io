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

      let language = 'undefined';
      for (let clazz of el.classList) {
        if (clazz.startsWith('language-')) {
          language = clazz.substring('language-'.length).replaceAll('_', ' ');
          break;
        }
      }
      if (language !== 'undefined') {
        el.parentElement.insertAdjacentHTML('afterbegin', `<label>${language}</label>`);
      }
      if (el.innerHTML.trim() === '') {
        el.append(document.createElement('br'));
      }
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
</style>

<svelte:head>
    <title>PresentKim Blog</title>
    <meta og:title="PresentKim Blog"/>
    <meta name="description" content="PresentKim's Blog"/>
    <meta og:description="PresentKim's Blog"/>
</svelte:head>

<header>
    <LogoButton {segment}/>
    <ThemeButton/>
</header>

<main>
    <slot></slot>
</main>