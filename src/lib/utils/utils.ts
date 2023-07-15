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

export const debounce = <F extends (...args: any[]) => void>(
  func: F,
  delay: number
): ((...args: Parameters<F>) => void) => {
  let id: NodeJS.Timeout | null;

  return (...args: Parameters<F>) => {
    clearTimeout(id!);
    id = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
