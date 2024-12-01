import { URL } from 'node:url';

const myURL = new URL('https://example.org:81/foo');
console.log(myURL.hostname);
// Prints example.org

// ホスト名を設定してもポートは変更されない
myURL.hostname = 'example.com';
console.log(myURL.href);
// Prints https://example.com:81/foo

// ポートを指定した場合は変更されない
myURL.hostname = 'example.hoge:1';
console.log(myURL.href);
// Prints https://example.com:81/foo

// myURL.hostを使用してホスト名とポートを変更する
myURL.host = 'example.org:82';
console.log(myURL.href);
// Prints https://example.org:82/foo
