import { Worker, isMainThread } from 'node:worker_threads';

if (isMainThread) {
  const worker = new Worker(new URL(import.meta.url));

  worker.on('online', async () => {
    const usage1 = await worker.cpuUsage();
    console.log('usage1', usage1);
    const usage2 = await worker.cpuUsage(usage1);
    console.log('usage2', usage2);
  });
}
