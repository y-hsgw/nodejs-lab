import { hrtime } from 'node:process';

const start = hrtime.bigint();
console.log('start', start);

setTimeout(() => {
  const end = hrtime.bigint();

  console.log(`Benchmark took ${end - start} nanoseconds`);
}, 1000);
