import { Worker, isMainThread } from 'node:worker_threads';

console.log('isMainThread', isMainThread);

if (isMainThread) {
  const worker = new Worker(new URL(import.meta.url));
  worker.on('exit', (exitCode) => {
    console.log('exit', exitCode);
  });
} else {
  process.exit(2);
}
