import { Buffer } from 'node:buffer';

const arrayBuffer = new ArrayBuffer(16);
const buffer1 = Buffer.from(arrayBuffer);

console.log(buffer1.buffer === arrayBuffer);

const buffer2 = Buffer.from('hello world', 'utf8');
console.log(buffer2);
console.log(buffer2.buffer);
