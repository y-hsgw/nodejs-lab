import { WritableStream } from 'node:stream/web';

const stream = new WritableStream<string>({
  start() {
    console.log('start!!');
  },
  write(chunk) {
    console.log('write: ', chunk);
  },
});

await stream.getWriter().write('hoge');
