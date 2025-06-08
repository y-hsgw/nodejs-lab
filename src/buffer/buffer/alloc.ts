import { Buffer } from 'node:buffer';

const buffer1 = Buffer.alloc(5);
console.log(buffer1);

const buffer2 = Buffer.alloc(5, 'a');
console.log(buffer2);

const buffer3 = Buffer.alloc(5, 'a', 'utf16le');
console.log(buffer3);
