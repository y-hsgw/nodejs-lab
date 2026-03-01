import { TransformStream } from 'node:stream/web';
import { MessageChannel } from 'node:worker_threads';

const stream = new TransformStream<string>({
  transform(chunk, controller) {
    console.log(`[transform] transform: ${chunk}`);
    controller.enqueue(chunk.toUpperCase());
  },
});

const { port1, port2 } = new MessageChannel();

port1.on('message', async (data: TransformStream<string>) => {
  const { writable, readable } = data;
  const writer = writable.getWriter();
  const reader = readable.getReader();
  await writer.write('hello');
  console.log(await reader.read());
  writer.close();
  port1.close();
});

port2.postMessage(stream, [stream]);
