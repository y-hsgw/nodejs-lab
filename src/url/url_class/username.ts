import { URL } from 'node:url';

const myURL = new URL('https://abc:xyz@example.com');
console.log(myURL.username);
// Prints abc

myURL.username = '123';
console.log(myURL.username);
console.log(myURL.href);
// Prints https://123:xyz@example.com/
