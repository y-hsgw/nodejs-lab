import { Worker, isMainThread } from 'node:worker_threads';

if (isMainThread) {
  const worker = new Worker(new URL(import.meta.url));
  worker.on('error', (err) => {
    console.log('🔥');
    console.error(err);
  });
} else {
  throw new Error('Worker error');
}
