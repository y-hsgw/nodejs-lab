import { URL } from 'node:url';

const isValid = URL.canParse('/foo', 'https://example.org/'); // true
console.log(isValid);

const isNotValid = URL.canParse('/foo'); // false
console.log(isNotValid);
