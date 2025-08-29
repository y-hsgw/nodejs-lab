import {
  Worker,
  isMainThread,
  setEnvironmentData,
  getEnvironmentData,
} from 'node:worker_threads';

console.log('isMainThread', isMainThread);
console.log(new URL(import.meta.url));
if (isMainThread) {
  setEnvironmentData('Hello', 'World!');
  const worker = new Worker(new URL(import.meta.url));
  console.log(worker.eventNames());
} else {
  console.log(getEnvironmentData('Hello')); // Prints 'World!'.
}
