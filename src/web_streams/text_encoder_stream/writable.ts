import { TextEncoderStream } from 'node:stream/web';

const textEncoderStream = new TextEncoderStream();

console.log(textEncoderStream.writable);

const writer = textEncoderStream.writable.getWriter();
const reader = textEncoderStream.readable.getReader();

writer.write('Hello');
writer.close();

const { value } = await reader.read();
console.log(value); // Uint8Array(5) [ 72, 101, 108, 108, 111 ]
