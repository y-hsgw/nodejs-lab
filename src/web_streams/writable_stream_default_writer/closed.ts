import { WritableStream } from 'node:stream/web';

const stream = new WritableStream<string>({
  start() {
    console.log('start!!');
  },
  close() {
    console.log('close');
  },
});

const writer = stream.getWriter();

await writer.close();

console.log(await writer.closed);
// Prints: undefined
