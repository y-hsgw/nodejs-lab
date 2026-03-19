import { TextDecoderStream } from 'node:stream/web';

console.log(new TextDecoderStream());

console.log(new TextDecoderStream('utf-16'));
