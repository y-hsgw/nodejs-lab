import { URLSearchParams } from 'node:url';

const searchParams = new URLSearchParams('?a=b&c=d');
console.log(searchParams.has('a'));
console.log(searchParams.has('a', 'b'));
// キーはヒットしているが、値がヒットしない場合はfalseを返す
console.log(searchParams.has('a', 'c'));
