import { MessageChannel } from 'node:worker_threads';

const { port1, port2 } = new MessageChannel();

port2.on('message', (message) => console.log(message));
port2.on('close', () => console.log('closed!'));

port1.postMessage('foobar');
port1.close();
