import { MessageChannel, markAsUntransferable } from 'node:worker_threads';

const pooledBuffer = new ArrayBuffer(8);
const typedArray1 = new Uint8Array(pooledBuffer);
const typedArray2 = new Float64Array(pooledBuffer);

markAsUntransferable(pooledBuffer);

const { port1 } = new MessageChannel();
try {
  port1.postMessage(typedArray1, [typedArray1.buffer]);
} catch (error) {
  console.warn(error);
  // error.name === 'DataCloneError'
}

// メモリは転送されていないことが確認できる。
// markAsUntransferableをコメントアウトすると、typedArray1のメモリが転送され、typedArray2は空になる。
console.log(typedArray1);
console.log(typedArray2);
