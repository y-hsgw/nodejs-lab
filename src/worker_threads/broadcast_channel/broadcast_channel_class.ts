import { isMainThread, BroadcastChannel, Worker } from 'node:worker_threads';

const bc = new BroadcastChannel('hello');

console.log('isMainThread', isMainThread);

if (isMainThread) {
  let c = 0;
  bc.onmessage = (event) => {
    console.log(c);
    console.log(event.data);
    if (++c === 10) bc.close();
  };
  for (let n = 0; n < 10; n++) new Worker(import.meta.filename);
} else {
  bc.postMessage('hello from every worker');
  bc.close();
}
