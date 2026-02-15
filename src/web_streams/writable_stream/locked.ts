import { WritableStream } from 'node:stream/web';

const stream = new WritableStream<string>({
  start() {
    console.log('start!!');
  },
  write(chunk) {
    console.log(chunk);
  },
});

console.log(stream.locked);

await stream.getWriter().write('Hello World');

console.log(stream.locked);
