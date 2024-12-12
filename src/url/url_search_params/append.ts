import { URLSearchParams } from 'node:url';

const searchParams = new URLSearchParams('?abc=123');
console.log(searchParams.get('abc')); // Prints 123

searchParams.append('abc', 'xyz');
console.log(searchParams.toString()); // Prints abc=123&abc=xyz;
