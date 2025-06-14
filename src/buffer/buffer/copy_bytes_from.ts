import { Buffer } from 'node:buffer';

const u16 = new Uint16Array([0, 0xffff]);
console.log(u16);
const buf1 = Buffer.copyBytesFrom(u16, 1, 1);
const buf2 = Buffer.copyBytesFrom(u16);
u16[1] = 0;
console.log(buf1);
console.log(buf1.length); // 2
console.log(buf1[0]); // 255
console.log(buf1[1]); // 255

console.log(buf2);
