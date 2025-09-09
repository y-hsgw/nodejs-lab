import { Worker, isMainThread, threadId } from 'node:worker_threads';

console.log('isMainThread', isMainThread);
console.log('threadId', threadId);

if (isMainThread) {
  const worker = new Worker(new URL(import.meta.url));
  console.log(worker.threadId);
}
