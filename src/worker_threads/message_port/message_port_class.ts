import { MessageChannel, MessagePort } from 'node:worker_threads';

const { port1, port2 } = new MessageChannel();
console.log(port1);
console.log(port2);
console.log(port1 instanceof MessagePort);
