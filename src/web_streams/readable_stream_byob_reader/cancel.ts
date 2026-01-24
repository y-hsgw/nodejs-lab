import { ReadableStreamBYOBReader, ReadableStream } from 'node:stream/web';

const byteStream = new ReadableStream({
  type: 'bytes',
  cancel(reason) {
    console.log('Stream cancelled');
    console.log(reason);
  },
});

const reader = new ReadableStreamBYOBReader(byteStream);

await reader.cancel('cancel!!');
