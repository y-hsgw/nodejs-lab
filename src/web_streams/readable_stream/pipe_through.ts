import { ReadableStream, TransformStream } from 'node:stream/web';

{
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue('a');
      controller.enqueue('b');
    },
  });

  const transform = new TransformStream({
    transform(chunk, controller) {
      controller.enqueue(chunk.toUpperCase());
    },
  });

  const transformedStream1 = stream.pipeThrough(transform);

  for await (const chunk of transformedStream1) console.log(chunk);
  // Prints: A
  // Prints: B
}
