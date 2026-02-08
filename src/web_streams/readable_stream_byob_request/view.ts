import { ReadableStream } from 'node:stream/web';

const stream = new ReadableStream({
  type: 'bytes',
  pull(controller) {
    const { byobRequest } = controller;
    console.log(byobRequest?.view);

    byobRequest?.respond(1);
    controller.close();
  },
});

const reader = stream.getReader({ mode: 'byob' });

const buf = new Uint8Array(10);

const { value, done } = await reader.read(buf);
console.log(done); // false
console.log(Array.from(value!));
