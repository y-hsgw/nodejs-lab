import { Worker, isMainThread } from 'node:worker_threads';
import process from 'node:process';

console.log('isMainThread', isMainThread);

if (isMainThread) {
  const worker = new Worker(new URL(import.meta.url), {
    stdout: true,
  });

  console.log(worker.stdout);

  worker.stdout.setEncoding('utf-8');
  worker.stdout?.on('data', (chunk) => {
    console.log('メインスレッドで捕捉したワーカーstdout出力:', chunk);
  });
} else {
  console.log('log');
  process.stdout.write('hello\n');
}
