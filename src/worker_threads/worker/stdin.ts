import { Worker, isMainThread } from 'node:worker_threads';
import process from 'node:process';

console.log('isMainThread', isMainThread);

if (isMainThread) {
  const worker = new Worker(new URL(import.meta.url), {
    stdin: true,
  });

  console.log(worker.stdin);

  worker.stdin?.write('hoge');
  worker.stdin?.end();

  worker.stdin?.on('close', () => {
    console.log('close');
  });
} else {
  let data = '';

  process.stdin.on('data', (chunk) => {
    data += chunk;
  });

  process.stdin.on('end', () => {
    console.log('ワーカーで受信したデータ:', data);
  });
}
