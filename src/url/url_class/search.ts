import { URL } from 'node:url';

const myURL = new URL('https://example.org/abc?123');
console.log(myURL.search);
// Prints ?123

myURL.search = 'abc=xyz';
console.log(myURL.href);
console.log(myURL.search);
// Prints https://example.org/abc?abc=xyz
