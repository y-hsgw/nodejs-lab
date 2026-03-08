import { ByteLengthQueuingStrategy } from 'node:stream/web';

const strategy = new ByteLengthQueuingStrategy({ highWaterMark: 1024 });

const chunk = new Uint8Array([1, 2, 3]);

console.log(strategy.size(chunk)); // 3
