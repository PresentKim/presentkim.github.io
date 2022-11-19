import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import java from 'highlight.js/lib/languages/java';
import kotlin from 'highlight.js/lib/languages/kotlin';
import php from 'highlight.js/lib/languages/php';
import cpp from 'highlight.js/lib/languages/cpp';
import bash from 'highlight.js/lib/languages/bash';
import markdown from 'highlight.js/lib/languages/markdown';
import plaintext from 'highlight.js/lib/languages/plaintext';
import yaml from 'highlight.js/lib/languages/yaml';
import json from 'highlight.js/lib/languages/json';

/** @type {Record<string, import('highlight.js').LanguageFn>} */
const languages = { javascript, java, kotlin, php, cpp, bash, markdown, plaintext, yaml, json };
for (const [name, language] of Object.entries(languages)) {
  hljs.registerLanguage(name, language);
}

export default (code, language) => {
  if (language && hljs.getLanguage(language)) {
    try {
      return hljs.highlight(code, { language });
    } catch (error) {}
  }
  return null;
};
