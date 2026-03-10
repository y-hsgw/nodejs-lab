import { CountQueuingStrategy } from 'node:stream/web';

const countQueuingStrategy = new CountQueuingStrategy({
  highWaterMark: 2,
});

console.log(countQueuingStrategy.highWaterMark);
