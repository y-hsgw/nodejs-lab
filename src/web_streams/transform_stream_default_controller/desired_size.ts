import { TransformStream } from 'node:stream/web';
import { setImmediate } from 'node:timers/promises';

const stream = new TransformStream<string, string>(
  {
    transform(chunk, controller) {
      console.log(
        `[transform:${chunk}] before enqueue desiredSize = ${controller.desiredSize}`,
      );
      controller.enqueue(chunk.toUpperCase());
      console.log(
        `[transform:${chunk}] after enqueue desiredSize = ${controller.desiredSize}`,
      );
    },
  },
  undefined,
  { highWaterMark: 2 },
);

const writer = stream.writable.getWriter();
const writeA = writer.write('a');
const writeB = writer.write('b');
const writeC = writer.write('c');
await setImmediate();

const reader = stream.readable.getReader();
console.log('[main] read1:', await reader.read());
console.log('[main] read2:', await reader.read());
console.log('[main] read3:', await reader.read());

await Promise.all([writeA, writeB, writeC]);
await writer.close();
console.log('[main] read4:', await reader.read());

writer.releaseLock();
reader.releaseLock();
