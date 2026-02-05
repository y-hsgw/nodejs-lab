import { ReadableStream } from 'node:stream/web';

const readableStream = new ReadableStream({
  type: 'bytes',
  start(controller) {
    controller.enqueue(new Uint8Array([1, 2, 3, 4]));
    controller.error('error!!!');
  },
});

for await (const chunk of readableStream) {
  console.log('read:', chunk);
}
