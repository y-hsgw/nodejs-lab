import { createWriteStream } from 'node:fs';
import path from 'node:path';
import { Worker, isMainThread } from 'node:worker_threads';

if (isMainThread) {
  const worker = new Worker(new URL(import.meta.url));

  worker.on('online', async () => {
    const snap2 = await worker.getHeapSnapshot();
    snap2.pipe(
      createWriteStream(
        path.join(import.meta.dirname, 'snapshot.heapsnapshot'),
      ),
    );
  });
} else {
  setInterval(() => {}, 1000);
}
