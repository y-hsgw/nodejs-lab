import { Buffer } from 'node:buffer';

const buf = Buffer.from([1, 5]);

console.log(buf.readInt16BE());
// Prints: 5
