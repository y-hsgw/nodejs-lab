import { StringDecoder } from 'node:string_decoder';

const decoder = new StringDecoder();
console.log(decoder);
decoder.write(Buffer.from([0xf0]));
console.log(decoder);
console.log(decoder.end(Buffer.from([0x9f, 0x8d, 0xa3])));
console.log(decoder);
