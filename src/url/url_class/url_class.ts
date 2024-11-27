import { URL } from 'node:url';

console.log(URL === globalThis.URL);

const myURL1 = new URL('/foo', 'https://example.org/');
console.log('myURL1', myURL1);

const myURL2 = new URL({ toString: () => 'https://example.org/' });
console.log('myURL2', myURL2);

const myURL3 = new URL('https://測試');
console.log('myURL3', myURL3);

const myURL4 = new URL('http://Example.com/', 'https://example.org/');
// http://example.com/
console.log('myURL4', myURL4);

const myURL5 = new URL('https://Example.com/', 'https://example.org/');
// https://example.com/
console.log('myURL5', myURL5);

const myURL6 = new URL('foo://Example.com/', 'https://example.org/');
// foo://Example.com/
console.log('myURL6', myURL6);

const myURL7 = new URL('http:Example.com/', 'https://example.org/');
// http://example.com/
console.log('myURL7', myURL7);

const myURL8 = new URL('https:Example.com/', 'https://example.org/');
// https://example.org/Example.com/
console.log('myURL8', myURL8);

const myURL9 = new URL('foo:Example.com/', 'https://example.org/');
// foo:Example.com/
console.log('myURL9', myURL9);
