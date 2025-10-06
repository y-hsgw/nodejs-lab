import { Worker, isMainThread } from 'node:worker_threads';

if (isMainThread) {
  const worker = new Worker(new URL(import.meta.url));

  console.log(worker.resourceLimits);
  worker.on('exit', (code) => {
    console.log('ワーカー終了コード:', code);
    console.log('終了後の resourceLimits:', worker.resourceLimits);
  });
}
