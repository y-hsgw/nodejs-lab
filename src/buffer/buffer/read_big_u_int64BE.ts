import { Buffer } from 'node:buffer';

const buf = Buffer.from([0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff]);

console.log(buf.readBigInt64BE()); // → -1n
console.log(buf.readBigUInt64BE()); // → 18446744073709551615n
