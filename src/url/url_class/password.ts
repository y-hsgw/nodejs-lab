import { URL } from 'node:url';

const myURL = new URL('https://abc:xyz@example.com');
console.log(myURL.password);
// Prints xyz

myURL.password = '123';
console.log(myURL.href);
console.log(myURL.password);
// Prints https://abc:123@example.com/
