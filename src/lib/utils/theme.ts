import { writable } from 'svelte/store';
import { browser } from '$app/environment';

declare type Theme = 'light' | 'dark';
const LOCAL_STORAGE_KEY = 'color-scheme';

function applyTheme() {
  if (!initialized || !browser) {
    return;
  }

  const storedColorScheme = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (storedColorScheme && _user_theme === _system_theme) {
    //remove the stored color scheme if it matches the current window color scheme
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  } else {
    //store the color scheme if it doesn't match the current window color scheme
    localStorage.setItem(LOCAL_STORAGE_KEY, _user_theme);
  }

  const classList = document.documentElement.classList;
  if (_user_theme === 'dark') {
    classList.remove('light');
    classList.add('dark');
  } else {
    classList.remove('dark');
    classList.add('light');
  }
}

let initialized = false;
let _system_theme: Theme = 'light';
let _user_theme: Theme = 'light';
const systemTheme = writable<Theme>(_system_theme);
const userTheme = writable<Theme>(_user_theme);

systemTheme.subscribe((theme) => {
  if (!initialized) {
    return;
  }

  if (_system_theme === _user_theme) {
    userTheme.update(() => theme);
  }

  _system_theme = theme;
  applyTheme();
});

userTheme.subscribe((theme) => {
  if (!initialized) {
    return;
  }

  _user_theme = theme;

  if (!browser) {
    return;
  }

  _user_theme = theme;
  applyTheme();
});

export const theme = userTheme;

export const toggleTheme = () =>
  userTheme.update(() => (_user_theme === 'dark' ? 'light' : 'dark'));

export const themeMount = () => {
  if (browser && !initialized && window && window.matchMedia) {
    console.log('Init theme!!!');
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    //get the color scheme from window media query
    _user_theme = _system_theme = mediaQuery.matches ? 'dark' : 'light';

    const storedColorScheme = localStorage.getItem(LOCAL_STORAGE_KEY) as Theme;
    if (storedColorScheme) {
      //get the color scheme from local storage
      _user_theme = storedColorScheme;
    }

    systemTheme.update(() => _system_theme);
    theme.update(() => _user_theme);

    //listen for color scheme changes to the media query
    mediaQuery.addEventListener('change', (e) =>
      systemTheme.update(() => (e.matches ? 'dark' : 'light'))
    );
    initialized = true;
  }
};
