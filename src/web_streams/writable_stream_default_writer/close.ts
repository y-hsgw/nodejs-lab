import { WritableStream } from 'node:stream/web';

const stream = new WritableStream<string>({
  start() {
    console.log('start!!');
  },
  close() {
    console.log('close!!');
  },
});

await stream.getWriter().close();
