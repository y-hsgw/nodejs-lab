import { ReadableStream } from 'node:stream/web';

const stream = new ReadableStream({
  cancel: (reason) => {
    console.log('reason', reason);
  },
});

await stream.cancel('This is reason.');
