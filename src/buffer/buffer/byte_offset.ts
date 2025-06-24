import { Buffer } from 'node:buffer';

// Create a buffer smaller than `Buffer.poolSize`.
const nodeBuffer = Buffer.from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(nodeBuffer.buffer); //  <2f 00 00 00 00 00 00 00 00 01 02 03 04 05 06 07 08 09 ...>
console.log(nodeBuffer.byteOffset);
// When casting the Node.js Buffer to an Int8Array, use the byteOffset
// to refer only to the part of `nodeBuffer.buffer` that contains the memory
// for `nodeBuffer`.
console.log(
  new Int8Array(nodeBuffer.buffer, nodeBuffer.byteOffset, nodeBuffer.length),
);
