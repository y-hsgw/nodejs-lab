import { CountQueuingStrategy } from 'node:stream/web';

const strategy = new CountQueuingStrategy({ highWaterMark: 10 });

const chunk = new Uint8Array([1, 2, 3]);

console.log(strategy.size(chunk)); // 1
