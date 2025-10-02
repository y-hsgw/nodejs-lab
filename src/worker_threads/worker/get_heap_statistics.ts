import { Worker, isMainThread } from 'node:worker_threads';

if (isMainThread) {
  const worker = new Worker(new URL(import.meta.url));

  worker.on('online', async () => {
    const snap = await worker.getHeapStatistics();
    console.log(snap);
  });
}
