import { StringDecoder } from 'node:string_decoder';

const decoder = new StringDecoder();
console.log(decoder);
const part1 = new Uint8Array([0xe2]);
const part2 = new Uint8Array([0x82]);
const part3 = new Uint8Array([0xac]);
decoder.write(part1);
console.log(decoder);
decoder.write(part2);
console.log(decoder);
console.log(decoder.end(part3));
console.log(decoder);
