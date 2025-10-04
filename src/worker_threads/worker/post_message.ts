import { Worker, isMainThread, parentPort } from 'node:worker_threads';

console.log('isMainThread', isMainThread);

if (isMainThread) {
  const worker = new Worker(new URL(import.meta.url));

  worker.postMessage('hi');
} else {
  parentPort?.on('message', (msg) => {
    console.log('ワーカーで受信:', msg);

    parentPort?.close();
  });
}
