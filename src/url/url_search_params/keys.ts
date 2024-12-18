import { URLSearchParams } from 'node:url';

const params = new URLSearchParams('foo=bar&foo=baz');
// keyに対するイテレータを返す。
console.log(params.keys());
