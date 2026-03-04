import { TransformStream } from 'node:stream/web';

const transform = new TransformStream<string, string>({
  transform(chunk, controller) {
    controller.enqueue(chunk.concat('foo'));
    controller.error('error!');
  },
});

const writer = transform.writable.getWriter();
const reader = transform.readable.getReader();

try {
  const [, ...readableStreamReadResults] = await Promise.all([
    writer.write('hogehoge'),
    reader.read(),
    reader.read(),
  ]);
  console.log(readableStreamReadResults);
} catch (error) {
  console.error('error:', error);
}
