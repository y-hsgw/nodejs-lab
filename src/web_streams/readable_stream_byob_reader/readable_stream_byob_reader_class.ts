import { ReadableStreamBYOBReader, ReadableStream } from 'node:stream/web';

const byteStream = new ReadableStream({
  type: 'bytes',
});

const reader = new ReadableStreamBYOBReader(byteStream);

console.log(reader);
