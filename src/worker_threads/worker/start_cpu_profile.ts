import { Worker } from 'node:worker_threads';

const worker = new Worker(
  `
  const { parentPort } = require('worker_threads');
  parentPort.on('message', () => {});
  `,
  { eval: true },
);

worker.on('online', async () => {
  // @ts-expect-error
  const handle = await worker.startCpuProfile();
  console.log('handle', handle);
  const profile = await handle.stop();
  console.log(profile);
  worker.terminate();
});
