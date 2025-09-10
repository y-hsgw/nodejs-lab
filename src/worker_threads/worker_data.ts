import { Worker, isMainThread, workerData } from 'node:worker_threads';

console.log('isMainThread', isMainThread);

if (isMainThread) {
  new Worker(import.meta.filename, {
    workerData: 'Hello, world!',
  });
} else {
  console.log(workerData); // Prints 'Hello, world!'.
}
