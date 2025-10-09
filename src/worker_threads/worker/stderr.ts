import { Worker, isMainThread } from 'node:worker_threads';

console.log('isMainThread', isMainThread);

if (isMainThread) {
  const worker = new Worker(new URL(import.meta.url));

  console.log(worker.stderr);

  worker.stderr.setEncoding('utf8');
  worker.stderr.on('data', (chunk) => {
    console.log('[メインスレッドで捕捉したワーカーstderr出力]:', chunk);
  });
} else {
  console.error('error');
}
