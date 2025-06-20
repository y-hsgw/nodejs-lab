import { Buffer } from 'node:buffer';
console.log(Buffer.isBuffer(Buffer.alloc(10)));
console.log(Buffer.isBuffer(Buffer.from('foo')));
console.log(Buffer.isBuffer('a string'));
console.log(Buffer.isBuffer([]));
console.log(Buffer.isBuffer({}));
console.log(Buffer.isBuffer(1));
console.log(Buffer.isBuffer(new Uint8Array(1024)));
