import { ReadableStream } from 'node:stream/web';

const readableStream = new ReadableStream({
  type: 'bytes',
  start(controller) {
    const buffer = new ArrayBuffer(2);
    controller.enqueue(new DataView(buffer));
    controller.close();
  },
});

for await (const chunk of readableStream) {
  console.log('read:', chunk);
}
