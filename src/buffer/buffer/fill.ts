import { Buffer } from 'node:buffer';

const b = Buffer.allocUnsafe(50).fill('h');

console.log(b.toString());
// Prints: hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh

const c = Buffer.allocUnsafe(5).fill('');

console.log(c.fill(''));
// Prints: <Buffer 00 00 00 00 00>

const buf = Buffer.allocUnsafe(5);

console.log(buf.fill('a'));
// Prints: <Buffer 61 61 61 61 61>
console.log(buf.fill('aazz', 0, 2, 'hex'));
// Prints: <Buffer aa aa 61 61 61>
