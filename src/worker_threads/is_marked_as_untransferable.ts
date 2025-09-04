import {
  markAsUntransferable,
  isMarkedAsUntransferable,
} from 'node:worker_threads';

const pooledBuffer = new ArrayBuffer(8);
markAsUntransferable(pooledBuffer);

console.log(isMarkedAsUntransferable(pooledBuffer));
console.log(isMarkedAsUntransferable({}));
