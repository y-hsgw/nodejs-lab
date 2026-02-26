import { TransformStream } from 'node:stream/web';

const transform = new TransformStream<string, string>({
  transform(chunk, controller) {
    console.log(`[transform] transform: ${chunk}`);
    controller.enqueue(chunk.toUpperCase());
  },
});

const writer = transform.writable.getWriter();
const reader = transform.readable.getReader();

const [, readableStreamReadResult] = await Promise.all([
  writer.write('a'),
  reader.read(),
]);
console.log(readableStreamReadResult);
