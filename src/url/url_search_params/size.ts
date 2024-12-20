import { URLSearchParams } from 'node:url';

const searchParams = new URLSearchParams('?a=b&c=d&aa=&ab');
// パラメータのエントリ総数
console.log(searchParams.size);
