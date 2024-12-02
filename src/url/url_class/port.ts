import { URL } from 'node:url';

const myURL = new URL('https://example.org:8888');
console.log(myURL.port);
// Prints 8888

// デフォルト・ポートは自動的に空文字列に変換される。
// (HTTPS プロトコルのデフォルトポートは 443)
myURL.port = '443';
console.log(myURL.port);
// Prints the empty string
console.log(myURL.href);
// Prints https://example.org/

myURL.port = '1234';
console.log(myURL.port);
// Prints 1234
console.log(myURL.href);
// Prints https://example.org:1234/

// 完全に無効なポート文字列は無視される
myURL.port = 'abcd';
console.log(myURL.port);
// Prints 1234
console.log(myURL.href);

// 先頭の数字はポート番号として扱われる
myURL.port = '5678abcd';
console.log(myURL.port);
// Prints 5678
console.log(myURL.href);

// 整数以外は切り捨て
myURL.port = '1234.5678';
console.log(myURL.port);
// Prints 1234
console.log(myURL.href);

// 65535より大きい数値は無視される
myURL.port = '65536';
console.log(myURL.port);
// Prints 1234
console.log(myURL.href);

// 科学的記数法で表現されていない範囲外の数値は無視される。
// @ts-expect-error
myURL.port = 1e10; // 10000000000, will be range-checked as described below
console.log(myURL.port);
// Prints 1234
