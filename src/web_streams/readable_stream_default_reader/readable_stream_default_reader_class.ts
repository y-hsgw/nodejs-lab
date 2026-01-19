import { ReadableStream, ReadableStreamDefaultReader } from 'node:stream/web';

const readableStreamDefaultReader = new ReadableStreamDefaultReader(
  new ReadableStream(),
);

console.log(readableStreamDefaultReader);
