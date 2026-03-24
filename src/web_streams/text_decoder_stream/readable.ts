import { TextDecoderStream } from 'node:stream/web';

const textDecoderStream = new TextDecoderStream();
console.log(textDecoderStream.readable);

const writer = textDecoderStream.writable.getWriter();
const reader = textDecoderStream.readable.getReader();

writer.write(new Uint8Array([72, 101, 108, 108, 111]));
writer.close();

const { value } = await reader.read();
console.log(value); // Hello
