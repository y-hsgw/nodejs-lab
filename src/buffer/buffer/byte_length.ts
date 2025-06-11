import { Buffer } from 'node:buffer';

const str = '\u00bd + \u00bc = \u00be';

console.log(
  `${str}: ${str.length} characters, ` +
    `${Buffer.byteLength(str, 'utf8')} bytes`,
);
