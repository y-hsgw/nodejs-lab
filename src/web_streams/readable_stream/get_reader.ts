import { ReadableStream } from 'node:stream/web';

const stream = new ReadableStream({
  start(controller) {
    controller.enqueue('a');
    controller.enqueue('b');
  },
});

const reader = stream.getReader();

console.log(await reader.read()); // "a"
console.log(await reader.read()); // "b"
