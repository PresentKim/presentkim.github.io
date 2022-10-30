// noinspection JSFileReferences
import all from '../posts/*.md';

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
  const permalink = filename.replace(/\.md$/, '');
  const date = new Date(metadata.date);
  let tags = [];
  if (metadata.tags) {
    tags = metadata.tags.split(',').map(str => str.trim());
  }
  return {...metadata, filename, html, permalink, date, tags};
}

export const posts = Array.from(postMap.values());
export const tags = Array.from(tagMap.keys());
export const findPost = (permalink) => postMap.get(permalink);
export const findPostsByTag = (tag) => tagMap.get(tag);