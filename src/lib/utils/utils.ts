export const minifyXML = (innerText: string): string =>
  `<?xml version="1.0" encoding="UTF-8" ?>${innerText}`
    .replaceAll(/[\r\n ]+/gi, ' ')
    .replaceAll(/> </gi, '><')
    .replaceAll(/<!--(.+?)-->/gi, '');

export const pickKeys = <T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> =>
  keys.reduce((acc, key) => {
    if (obj.hasOwnProperty(key)) {
      acc[key] = obj[key];
    }
    return acc;
  }, {} as Pick<T, K>);

/** Returns a keyboard event handler
 * that executes a given callback function when entering Space or Enter */
export const runOnEnter = (callback: () => void) => (event: KeyboardEvent) => {
  if (event.code === 'Space' || event.code === 'Enter') {
    callback();
    event.preventDefault();
  }
};
