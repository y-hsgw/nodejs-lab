import { MessageChannel } from 'node:worker_threads';

const { port1, port2 } = new MessageChannel();

port2.on('message', (message) => console.log(message));

port1.postMessage('foo');

port1.close();
