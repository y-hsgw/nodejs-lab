import { URLSearchParams } from 'node:url';

const searchParams = new URLSearchParams('?abc=123');
console.log(searchParams.get('abc')); // Prints 123

searchParams.delete('abc');
console.log(searchParams.toString()); // Prints ""
