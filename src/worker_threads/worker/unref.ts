import { Worker, isMainThread } from 'node:worker_threads';

console.log('isMainThread', isMainThread);

if (isMainThread) {
  const worker = new Worker(new URL(import.meta.url));

  worker.unref();
} else {
  setTimeout(() => {
    console.log('Worker 完了');
  }, 3000);
}
