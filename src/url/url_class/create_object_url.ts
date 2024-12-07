import { URL } from 'node:url';
import { Blob, resolveObjectURL } from 'node:buffer';

const blob = new Blob(['hello😄'], { type: 'text/plain' });
console.log(blob);
const id = URL.createObjectURL(blob);
console.log(id);
const url = new URL(id);
console.log(url.protocol);
console.log(new URL(id).pathname);

const otherBlob = resolveObjectURL(id);
console.log(otherBlob?.size);
