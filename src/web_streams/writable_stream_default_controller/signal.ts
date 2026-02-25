import { WritableStream } from 'node:stream/web';
import { setTimeout } from 'node:timers/promises';

const stream = new WritableStream<string>({
  async write(chunk, controller) {
    console.log(`[sink] write start: ${chunk}`);
    // @ts-expect-error
    controller.signal.addEventListener('abort', () => {
      console.log('abortされた');
    });
    await setTimeout(1000);

    // @ts-expect-error
    console.log(controller.signal);

    console.log(`[sink] write end: ${chunk}`);
  },
});

const writer = stream.getWriter();
const writePromise = writer.write('hoge').catch((reason) => {
  console.log('[main] write rejected:', reason); // "abort"
});

await Promise.resolve();
await writer.abort('abort');
await writePromise;
