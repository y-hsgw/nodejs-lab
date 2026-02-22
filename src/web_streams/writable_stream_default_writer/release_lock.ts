import { WritableStream } from 'node:stream/web';

const stream = new WritableStream<string>({
  start() {
    console.log('start!!');
  },
  abort(reason) {
    console.log('reason: ', reason);
  },
});

const writer = stream.getWriter();

console.log('locked (before releaseLock):', stream.locked);
writer.releaseLock();
console.log('locked (after releaseLock):', stream.locked);
