import { URLSearchParams } from 'node:url';

const params = new URLSearchParams('query[]=abc&type=search&query[]=123');
// 各名前と値のペアの値に対するイテレータを返す
console.log(params.values());
