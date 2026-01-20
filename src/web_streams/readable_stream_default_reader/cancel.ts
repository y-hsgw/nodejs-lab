import { ReadableStream, ReadableStreamDefaultReader } from 'node:stream/web';

const readableStreamDefaultReader = new ReadableStreamDefaultReader(
  new ReadableStream({
    cancel: (reason) => {
      console.log('reason', reason);
    },
  }),
);

await readableStreamDefaultReader.cancel('This is reason.');
