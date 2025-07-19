import { Buffer } from 'node:buffer';

const buf = Buffer.from([0x12, 0x34, 0x56, 0x78, 0x90, 0xab]);

console.log(buf.readIntLE(0, 2));
// Prints: 13330
console.log(buf.readIntLE(0, 6).toString(16));
// Prints: -546f87a9cbee
