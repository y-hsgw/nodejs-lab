import { Worker, isMainThread } from 'node:worker_threads';

console.log('isMainThread', isMainThread);

if (isMainThread) {
  const worker = new Worker(new URL(import.meta.url));

  worker.on('online', async () => {
    const exitCode = await worker.terminate();
    console.log(`[main] ワーカー終了コード: ${exitCode}`);
  });
}
