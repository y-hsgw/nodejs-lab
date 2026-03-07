import { ByteLengthQueuingStrategy } from 'node:stream/web';

const byteLengthQueuingStrategy = new ByteLengthQueuingStrategy({
  highWaterMark: 2,
});

console.log(byteLengthQueuingStrategy.highWaterMark);
