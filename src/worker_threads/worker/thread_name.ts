import { Worker, isMainThread, threadId } from 'node:worker_threads';

console.log(`[main] isMainThread=${isMainThread}, threadId=${threadId}`);

if (isMainThread) {
  const worker = new Worker(new URL(import.meta.url), {
    name: 'main',
  });

  console.log(worker.threadName);
}
