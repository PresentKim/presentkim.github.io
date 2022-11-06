// noinspection JSFileReferences
import all from '../../posts/*.md';
import dayjs from 'dayjs';
import codeHighlight from './code-highlight';

const postMap = new Map();
const tagMap = new Map();

for (let post of all) {
  let transformed = transform(post);
  postMap.set(transformed.permalink, transformed);

  for (let tag of transformed.tags) {
    if (!tagMap.has(tag)) {
      tagMap.set(tag, []);
    }
    tagMap.get(tag).push(transformed);
  }
}

function transform({filename, html, metadata}) {
  const codeRegex = /<pre><code(.*?)>([\w\W]*?)<\/code><\/pre>/igm;
  const languageRegex = /.*?language-([^ '"]+)?.*/ig;

  html = html.replaceAll(codeRegex, (match, codeProps, code) => {
    // get language info from <code> elements props
    let language = codeProps.replaceAll(languageRegex, '$1').trim();

    // show language if it's not empty
    let showLanguage = language !== '';

    // if language ends with ? then don't show language label
    if (language.endsWith('?')) {
      language = language.substring(0, language.length - 1);
      showLanguage = false;
    }

    // replace html entities of code before highlighting
    for (let [key, value] of Object.entries(
        {'&lt;': '<', '&gt;': '>', '&amp;': '&'},
    )) {
      code = code.replaceAll(key, value);
    }

    // highlight code
    code = codeHighlight(code, language)?.value ?? code;

    // replace '<?' with '&lt;?' to prevent it from being interpreted as a comments
    code = code.replaceAll('<?', '&lt;?');

    return '<pre>'
        + (showLanguage ? `<label>${language}</label>` : '')
        + `<code class="hljs ${language}">${code}</code>`
        + '</pre>';
  });

  return {
    ...metadata,
    filename,
    html,
    permalink: filename.replace(/\.md$/, ''),
    date: new Date(metadata.date),
    formattedDate: dayjs(metadata.date).format('YYYY년 MM월 DD일 HH:mm'),
  };
}

export const posts = Array.from(postMap.values());
export const tags = Array.from(tagMap.keys());
export const findPost = (permalink) => postMap.get(permalink);
export const findPostsByTag = (tag) => tagMap.get(tag);