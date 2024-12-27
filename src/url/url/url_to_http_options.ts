import { urlToHttpOptions } from 'node:url';
const myURL = new URL('https://a:b@測試/test?abc#foo');

console.log(urlToHttpOptions(myURL));
/*
{
  protocol: 'https:',
  hostname: 'xn--g6w251d',
  hash: '#foo',
  search: '?abc',
  pathname: '/test',
  path: '/test?abc',
  href: 'https://a:b@xn--g6w251d/test?abc#foo',
  auth: 'a:b'
}
*/
