import { derived, writable } from 'svelte/store';

import { browser } from '$app/environment';

import { setDocumentDataset } from '$lib/utils/document-dateset';

const STORAGE_KEY = 'color-scheme';

declare type Theme = 'light' | 'dark';
export const darkMode = writable(
  browser && document.documentElement.dataset['theme'] === 'dark'
);

darkMode.subscribe((theme) => {
  //Works only on browser
  if (!browser) {
    return;
  }

  //Apply to local storage
  if (theme === window.matchMedia('(prefers-color-scheme: dark)').matches) {
    //remove the stored color scheme if it matches the current window color scheme
    localStorage.removeItem(STORAGE_KEY);
  } else {
    //store the color scheme if it doesn't match the current window color scheme
    localStorage.setItem(STORAGE_KEY, toTheme(theme));
  }

  //Apply to document dataset
  setDocumentDataset('theme', toTheme(theme));
});

//listen for color scheme changes to the media query
if (browser) {
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (e) => darkMode.update(() => e.matches));
}

function toTheme(theme: string | boolean | null): Theme {
  return theme === true || theme === 'dark' ? 'dark' : 'light';
}

export const giscusTheme = derived(darkMode, ($theme) =>
  $theme ? 'transparent_dark' : 'noborder_light'
);
