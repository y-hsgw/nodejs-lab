import process from 'node:process';
import { isMainThread, Worker } from 'node:worker_threads';

if (isMainThread) {
  process.on('worker', (worker) => {
    console.log('worker', worker);
  });

  new Worker(new URL(import.meta.url));
}
