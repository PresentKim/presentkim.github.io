export const minifyXML = (innerText: string): string =>
  `<?xml version="1.0" encoding="UTF-8"?>${innerText}`
    .replaceAll(/[\r\n ]+/gi, ' ')
    .replaceAll(/> </gi, '><')
    .replaceAll(/<!--(.+?)-->/gi, '');
