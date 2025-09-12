import { BroadcastChannel } from 'node:worker_threads';

const bc = new BroadcastChannel('log');
console.log(bc);
bc.unref();
