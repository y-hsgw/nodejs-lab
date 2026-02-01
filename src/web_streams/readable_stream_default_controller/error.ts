import { ReadableStream } from 'node:stream/web';

const readableStream = new ReadableStream<string>({
  start(controller) {
    controller.enqueue('a');
    controller.enqueue('b');
    controller.error('error!!!');
  },
});

for await (const chunk of readableStream) {
  console.log('read:', chunk);
}
