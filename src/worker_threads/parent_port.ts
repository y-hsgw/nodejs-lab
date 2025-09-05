import { Worker, isMainThread, parentPort } from 'node:worker_threads';

console.log(isMainThread);

if (isMainThread) {
  console.log('parentPort', parentPort);
  const worker = new Worker(new URL(import.meta.url));
  worker.once('message', (message) => {
    console.log('worker', message);
  });
  worker.postMessage('Hello, world!');
} else {
  parentPort?.once('message', (message) => {
    console.log('parentPort', message);
    parentPort?.postMessage('message');
  });
}
