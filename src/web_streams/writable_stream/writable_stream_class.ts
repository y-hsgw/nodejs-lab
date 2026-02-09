import { WritableStream } from 'node:stream/web';

const stream = new WritableStream({
  start() {
    console.log('start!!');
  },
  write(chunk) {
    console.log(chunk);
  },
});

await stream.getWriter().write('Hello World');
