import { URLSearchParams } from 'node:url';

const searchParams = new URLSearchParams('?a=b&a=c');
console.log(searchParams.getAll('a'));
// マッチしなかったらnullを返す
console.log(searchParams.get('b'));
