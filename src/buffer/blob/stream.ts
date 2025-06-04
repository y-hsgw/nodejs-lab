import { Blob } from 'buffer';

const blob = new Blob(['Hello, world!'], { type: 'text/plain' });
console.log(blob.stream());
