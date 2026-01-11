import { ReadableStream } from 'node:stream/web';

const stream = new ReadableStream();

console.log(stream.locked);
stream.getReader();
console.log(stream.locked);
