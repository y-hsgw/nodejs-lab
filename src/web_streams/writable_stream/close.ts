import { WritableStream } from 'node:stream/web';

const stream = new WritableStream({
  start() {
    console.log('start!!');
  },
  write(chunk) {
    console.log(chunk);
  },
  close() {
    console.log('close!!');
  },
});

await stream.getWriter().close();
