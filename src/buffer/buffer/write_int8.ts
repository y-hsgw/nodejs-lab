import { Buffer } from 'node:buffer';

const buf = Buffer.allocUnsafe(4);

buf.writeInt8(2, 0);
buf.writeInt8(-2, 1);
buf.writeInt8(3, 2);

console.log(buf);
// Prints: <Buffer 02 fe 03 00>
