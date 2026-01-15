import { ReadableStream, WritableStream } from 'node:stream/web';

const readableStream = new ReadableStream({
  start(controller) {
    controller.enqueue('a');
    controller.enqueue('b');
    controller.close();
  },
});

const writableStream = new WritableStream({
  write(chunk) {
    console.log('write:', chunk);
  },
  close() {
    console.log('done');
  },
});

await readableStream.pipeTo(writableStream);
