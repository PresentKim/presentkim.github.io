import { writable } from 'svelte/store';

import { browser } from '$app/environment';
import { page } from '$app/stores';

export function setDocumentDataset(name: string, value: string) {
  if (browser) {
    document.documentElement.dataset[name] = value;
  }
}

/** Store variable containing whether sidebar is displayed */
export const sidebar = writable(false);

//Update document data set when sidebar value changed
sidebar.subscribe((visible) =>
  setDocumentDataset('sidebar', visible ? 'visible' : 'invisible')
);

//Close sidebar menu when page redirected
if (browser) {
  page.subscribe(() => sidebar.set(false));
}
