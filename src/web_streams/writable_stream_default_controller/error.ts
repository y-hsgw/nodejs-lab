import { WritableStream } from 'node:stream/web';
import { setTimeout } from 'node:timers/promises';

const stream = new WritableStream<string>({
  async write(chunk, controller) {
    console.log(`[sink] write start: ${chunk}`);
    await setTimeout(200);

    if (chunk === 'boom') {
      controller.error(new Error('controller.error() called'));
      console.log('[sink] controller.error() called');
      return;
    }

    console.log(`[sink] write end: ${chunk}`);
  },
});

const writer = stream.getWriter();

const p1 = writer.write('A');
const p2 = writer.write('boom');
const p3 = writer.write('C');

try {
  await writer.ready;
  console.log('[main] writer.ready fulfilled');
} catch (err) {
  console.log('[main] writer.ready rejected:', (err as Error).message);
}

for (const [label, p] of [
  ['write A', p1],
  ['write boom', p2],
  ['write C', p3],
]) {
  try {
    await p;
    console.log(`[main] ${label} fulfilled`);
  } catch (err) {
    console.log(`[main] ${label} rejected:`, (err as Error).message);
  }
}
