import { ReadableStream, ReadableStreamDefaultReader } from 'node:stream/web';

const readableStreamDefaultReader = new ReadableStreamDefaultReader(
  new ReadableStream({
    start(controller) {
      controller.enqueue('hello');
    },
  }),
);

console.log(await readableStreamDefaultReader.read());
