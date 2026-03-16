import { TextEncoderStream } from 'node:stream/web';

const textEncoderStream = new TextEncoderStream();
console.log(textEncoderStream.encoding);
