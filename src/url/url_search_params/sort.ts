import { URLSearchParams } from 'node:url';

const params = new URLSearchParams('query[]=abc&type=search&query[]=123');
params.sort();
// 同じ名前を持つname-valueペア間の相対的な順序は保持される
console.log(params.toString());
// Prints query%5B%5D=abc&query%5B%5D=123&type=search
