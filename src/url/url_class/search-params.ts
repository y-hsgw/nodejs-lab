import { URL } from 'node:url';

const myURL = new URL('https://example.org/abc?foo=~bar');

// URLオブジェクトはパーセンテージ・エンコードしないが、
console.log(myURL.search); // prints ?foo=~bar

// searchParamsでURLを変更すると...
myURL.searchParams.sort();

// パーセンテージ・エンコードされる
console.log(myURL.search); // prints ?foo=%7Ebar
