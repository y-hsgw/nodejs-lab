import { URLSearchParams } from 'node:url';

const searchParams1 = new URLSearchParams('?a=b&c=d');
console.log(searchParams1.get('a'));
// マッチしなかったらnullを返す
console.log(searchParams1.get('b'));

const searchParams2 = new URLSearchParams('?a=b&a=c');
// 最初にマッチした値を返す
console.log(searchParams2.get('a'));
