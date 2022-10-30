<script>
  import '../global.css';

  import hljs from 'highlight.js/lib/core';
  import javascript from 'highlight.js/lib/languages/javascript';
  import java from 'highlight.js/lib/languages/java';
  import kotlin from 'highlight.js/lib/languages/kotlin';
  import php from 'highlight.js/lib/languages/php';
  import cpp from 'highlight.js/lib/languages/cpp';

  /** @type {Record<string, import('highlight.js').LanguageFn>} */
  const languages = {js: javascript, javascript, java, kotlin, php, cpp};
  for (const [name, language] of Object.entries(languages)) {
    hljs.registerLanguage(name, language);
  }

  import Header from '../components/Header.svelte';
  import {onMount} from 'svelte';

  export let segment;

  onMount(() => {
    document.querySelectorAll('pre code').forEach((el) => {
      el.innerHTML = el.innerHTML.replaceAll('<', '&lt;').replaceAll('>', '&gt;');
      console.log(el.innerHTML);
      hljs.highlightElement(el);
    });
  });
</script>

{#if segment !== undefined }
    <Header/>
{/if}
<main>
    <slot></slot>
</main>