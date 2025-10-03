import { Worker, isMainThread } from 'node:worker_threads';

if (isMainThread) {
  const worker = new Worker(new URL(import.meta.url));

  console.log(worker.performance);
}
