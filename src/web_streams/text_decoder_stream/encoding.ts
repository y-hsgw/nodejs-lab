import { TextDecoderStream } from 'node:stream/web';

console.log(new TextDecoderStream().encoding);
console.log(new TextDecoderStream('utf-16').encoding);
