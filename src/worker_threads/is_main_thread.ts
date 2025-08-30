import { Worker, isMainThread } from 'node:worker_threads';

console.log(isMainThread);

if (isMainThread) {
  // このワーカーは現在のファイルを再読み込みする
  new Worker(new URL(import.meta.url));
} else {
  console.log('Inside Worker!');
}
