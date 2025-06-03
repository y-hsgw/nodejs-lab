import { Blob } from 'buffer';

const blob = new Blob(['Hello, world!'], { type: 'text/plain' });
console.log(blob);
console.log(blob.slice(1));
console.log(blob.slice(1, 2));
console.log(blob.slice(undefined, 2));
console.log(blob.slice(1, 2, 'text/plain'));
