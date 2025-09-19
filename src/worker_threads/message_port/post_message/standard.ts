import { MessageChannel } from 'node:worker_threads';

const { port1, port2 } = new MessageChannel();

port1.on('message', (message) => console.log(message));

const circularData = {};
// @ts-expect-error
circularData.foo = circularData;
// Prints: { foo: [Circular] }
port2.postMessage(circularData);
port2.close();
