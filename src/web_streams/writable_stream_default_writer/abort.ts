import { WritableStream } from 'node:stream/web';

const stream = new WritableStream<string>({
  start() {
    console.log('start!!');
  },
  abort(reason) {
    console.log('reason: ', reason);
  },
});

await stream.getWriter().abort('abort!');
