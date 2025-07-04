import { Buffer } from 'node:buffer';

const buf = Buffer.alloc(1234);

console.log(buf.length);

buf.write('some string', 0, 'utf8');

console.log(buf.length);
