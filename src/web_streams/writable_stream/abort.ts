import { WritableStream } from 'node:stream/web';

const stream = new WritableStream({
  start() {
    console.log('start!!');
  },
  write(chunk) {
    console.log(chunk);
  },
  abort(reason) {
    console.log('reason:', reason);
  },
});

await stream.abort('abort!!');
