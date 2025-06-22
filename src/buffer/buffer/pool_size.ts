import { Buffer } from 'node:buffer';

console.log(Buffer.poolSize);

Buffer.poolSize = 1024;
console.log(Buffer.poolSize);
