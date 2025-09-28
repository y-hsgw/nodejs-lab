import { Worker, isMainThread, parentPort } from 'node:worker_threads';

console.log('isMainThread', isMainThread);

if (isMainThread) {
  const worker = new Worker(new URL(import.meta.url));
  worker.on('message', (value) => {
    console.log('message', value);
  });
} else {
  parentPort?.postMessage('hoge');
}
