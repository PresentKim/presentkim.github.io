import { browser } from '$app/environment';

export function setDocumentDataset(name: string, value: string) {
  if (browser) {
    document.documentElement.dataset[name] = value;
  }
}

