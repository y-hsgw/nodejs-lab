import url from 'node:url';

console.log(url.domainToUnicode('xn--espaol-zwa.com')); // Prints español.com
console.log(url.domainToUnicode('xn--fiq228c.com')); // Prints 中文.com
// 無効なドメイン名の場合は空文字列を返す。
console.log(url.domainToUnicode('xn--iñvalid.com')); // Prints an empty string
