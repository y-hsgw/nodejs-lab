import { WritableStream } from 'node:stream/web';
import { setTimeout } from 'node:timers/promises';

const stream = new WritableStream<string>({
  async write(chunk) {
    console.log(`[sink] start write: ${chunk}`);
    await setTimeout(500);
    console.log(`[sink] end write: ${chunk}`);
  },
  close() {
    console.log('[sink] close');
  },
});

const writer = stream.getWriter();

// バックプレッシャーがなければ ready は即時に解決済み
await writer.ready;
console.log('[main] initial writer.ready: fulfilled');

const writes = ['A', 'B', 'C'].map((chunk) => {
  const p = writer.write(chunk);
  console.log(`[main] enqueue ${chunk}, desiredSize:`, writer.desiredSize);
  return p;
});

let readyResolved = false;
void writer.ready.then(() => {
  readyResolved = true;
  console.log('[main] writer.ready resolved, desiredSize:', writer.desiredSize);
});

await Promise.resolve();
console.log('[main] next microtask, readyResolved:', readyResolved);

const startedAt = Date.now();
console.log('[main] waiting writer.ready ...');
await writer.ready;
console.log(`[main] waited ${Date.now() - startedAt}ms for writer.ready`);

await Promise.all(writes);
await writer.close();
