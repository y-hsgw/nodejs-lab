import { WritableStream } from 'node:stream/web';

const stream = new WritableStream<string>({
  start() {
    console.log('start!!');
  },
  write(chunk) {
    console.log(chunk);
  },
});

console.log(stream.getWriter());
