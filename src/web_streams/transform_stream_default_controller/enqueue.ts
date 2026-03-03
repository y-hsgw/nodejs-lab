import { TransformStream } from 'node:stream/web';

const transform = new TransformStream<string, string>({
  transform(chunk, controller) {
    controller.enqueue(chunk.concat('foo'));
    controller.enqueue(chunk.substring(2));
    controller.enqueue(undefined);
  },
});

const writer = transform.writable.getWriter();
const reader = transform.readable.getReader();

const [, ...readableStreamReadResults] = await Promise.all([
  writer.write('hogehoge'),
  reader.read(),
  reader.read(),
]);
console.log(readableStreamReadResults);
