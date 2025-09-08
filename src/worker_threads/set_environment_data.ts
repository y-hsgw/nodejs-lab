import {
  Worker,
  isMainThread,
  setEnvironmentData,
  getEnvironmentData,
} from 'node:worker_threads';

console.log('isMainThread', isMainThread);

if (isMainThread) {
  setEnvironmentData('Hello', 'World!');
  setEnvironmentData(true, 'true1');
  setEnvironmentData(true, 'true2');
  const worker = new Worker(new URL(import.meta.url));
  console.log(worker.eventNames());
  console.log(getEnvironmentData('Hello')); // Prints 'World!'.
  console.log(getEnvironmentData(true)); // Prints 'true2'.
} else {
  console.log(getEnvironmentData('Hello')); // Prints 'World!'.
  console.log(getEnvironmentData(true)); // Prints 'true2'.
}
