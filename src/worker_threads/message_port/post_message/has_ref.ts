import { MessageChannel } from 'node:worker_threads';

const { port1, port2 } = new MessageChannel();

port1.ref();

console.log(port1.hasRef());
console.log(port2.hasRef());

port1.close();
