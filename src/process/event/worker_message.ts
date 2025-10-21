import {
  postMessageToThread,
  isMainThread,
  threadId,
  Worker,
} from 'node:worker_threads';
import process from 'node:process';

console.log('isMainThread', isMainThread);
console.log(threadId);

if (isMainThread) {
  new Worker(new URL(import.meta.url));
} else {
  postMessageToThread(0, 'hello');
}

process.on('workerMessage', (value, source) => {
  console.log('value', value);
  console.log('source', source);
});
