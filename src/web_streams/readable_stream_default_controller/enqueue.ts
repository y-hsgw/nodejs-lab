import { ReadableStream } from 'node:stream/web';

const readableStream = new ReadableStream<string | number>({
  start(controller) {
    controller.enqueue('first');
    controller.enqueue(1);
    controller.close();
  },
});

for await (const chunk of readableStream) {
  console.log('read:', chunk);
}
