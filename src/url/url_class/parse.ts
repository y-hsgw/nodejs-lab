import { URL } from 'node:url';

const validUrl = URL.parse('/foo', 'https://example.org/');

console.log(validUrl);

const invalidUrl = URL.parse('/foo');
console.log(invalidUrl);
