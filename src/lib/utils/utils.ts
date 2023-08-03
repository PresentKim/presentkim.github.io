/**
 * Minifies XML content by removing unnecessary whitespaces and comments.
 * @param innerText - The inner content of the XML to be minified.
 * @returns The minified XML content.
 */
export const minifyXML = (innerText: string): string =>
  `<?xml version="1.0" encoding="UTF-8" ?>${innerText}`
    .replaceAll(/[\r\n ]+/gi, ' ')
    .replaceAll(/> </gi, '><')
    .replaceAll(/<!--(.+?)-->/gi, '');

/**
 * Creates a new object with selected keys from the given object.
 * @param obj - The original object from which keys will be extracted.
 * @param keys - An array of keys to be extracted from the original object.
 * @returns A new object containing only the selected keys.
 */
export const pick = <T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> =>
  keys.reduce((acc, key) => {
    if (obj.hasOwnProperty(key)) {
      acc[key] = obj[key];
    }
    return acc;
  }, {} as Pick<T, K>);

/**
 * Creates a new object excluding the specified keys from the given object.
 * @param obj - The original object from which keys will be excluded.
 * @param keys - An array of keys to be excluded from the original object.
 * @returns A new object containing all keys except the ones specified.
 */
export const omit = <T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> =>
  Object.keys(obj).reduce((acc, key) => {
    if (!keys.includes(key as K)) {
      const includeKey = key as keyof Omit<T, K>;
      acc[includeKey] = obj[includeKey];
    }
    return acc;
  }, {} as Omit<T, K>);

/**
 * Returns a function that runs the given callback when the 'Space' or 'Enter' key is pressed.
 * @param callback - The function to be executed when the key is pressed.
 * @returns The event handler function for the 'keydown' event.
 */
export const runOnEnter = (callback: () => void) => (event: KeyboardEvent) => {
  if (event.code === 'Space' || event.code === 'Enter') {
    callback();
    event.preventDefault();
  }
};
