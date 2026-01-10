import { ReadableStream } from 'node:stream/web';

const stream = new ReadableStream({
  start: () => {
    console.log('start!');
  },
});

console.log(stream);
