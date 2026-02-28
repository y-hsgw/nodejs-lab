import { TransformStream } from 'node:stream/web';

const stream = new TransformStream<string, string>({
  transform(chunk, controller) {
    controller.enqueue(chunk);
  },
});

console.log('writable:', stream.writable);
