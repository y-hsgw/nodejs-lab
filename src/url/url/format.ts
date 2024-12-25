import url from 'node:url';
const myURL = new URL('https://a:b@測試?abc#foo');

console.log(myURL.href);
// Prints https://a:b@xn--g6w251d/?abc#foo

console.log(myURL.toString());
// Prints https://a:b@xn--g6w251d/?abc#foo

console.log(url.format(myURL, { fragment: false }));
// Prints 'https://a:b@xn--g6w251d/?abc'
console.log(url.format(myURL, { unicode: true }));
// Prints 'https://a:b@測試/?abc#foo'
console.log(url.format(myURL, { auth: false }));
// Prints 'https://xn--g6w251d/?abc#foo'
console.log(url.format(myURL, { search: false }));
// Prints 'https://a:b@xn--g6w251d/#foo'
