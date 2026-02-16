import { WritableStream } from 'node:stream/web';
import { MessageChannel } from 'node:worker_threads';

const stream = new WritableStream<string>({
  write(chunk) {
    console.log('sink:', chunk);
  },
  close() {
    console.log('sink closed');
  },
  abort(reason) {
    console.error('sink aborted:', reason);
  },
});

const { port1, port2 } = new MessageChannel();

port1.on('message', async (data: WritableStream<string>) => {
  const writer = data.getWriter();
  await writer.write('hello');
  await writer.close();
  port1.close();
});

port2.postMessage(stream, [stream]);
