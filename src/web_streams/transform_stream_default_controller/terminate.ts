import { TransformStream } from 'node:stream/web';

const transform = new TransformStream<string>({
  transform(chunk, controller) {
    console.log('transform:', chunk);
    if (chunk === 'STOP') {
      controller.terminate();
      return;
    }
    controller.enqueue(chunk);
  },
});

const writer = transform.writable.getWriter();
const reader = transform.readable.getReader();

const readLoop = (async () => {
  while (true) {
    const result = await reader.read();
    console.log('read:', result);
    if (result.done) break;
  }
})();

await writer.write('A');
await writer.write('STOP');

try {
  await writer.write('B');
  console.log('write B: ok');
} catch (e) {
  if (e instanceof Error) {
    console.log('write B: err', e.name, e.message);
  }
}

try {
  await writer.close();
  console.log('close: ok');
} catch (e) {
  if (e instanceof Error) {
    console.log('close: err', e.name, e.message);
  }
}

await readLoop;
