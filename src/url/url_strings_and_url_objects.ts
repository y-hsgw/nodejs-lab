import url from 'node:url';

// WHATWG APIを使用したURL文字列の解析：
const myURL1 = new URL(
  'https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash',
);
console.log('whatwg', myURL1);

// レガシーAPIを使用してURL文字列を解析
const myURL2 = url.parse(
  'https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash',
);

console.log('legacy', myURL2);
