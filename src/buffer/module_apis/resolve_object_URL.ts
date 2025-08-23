import { resolveObjectURL } from 'node:buffer';

const src = new Blob(['hello'], { type: 'text/plain' });

const id = URL.createObjectURL(src);

console.log(id);

const blob = resolveObjectURL(id);
console.log(blob);

console.log(resolveObjectURL('node:aaaa')); // undefined
