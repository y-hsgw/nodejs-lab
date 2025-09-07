import { MessageChannel, receiveMessageOnPort } from 'node:worker_threads';
const { port1, port2 } = new MessageChannel();
port1.postMessage({ hello: 'A' });
port1.postMessage({ hello: 'B' });

console.log(receiveMessageOnPort(port2));
// Prints: { message: { hello: 'A' } }
console.log(receiveMessageOnPort(port2));
// Prints: { message: { hello: 'B' } }
console.log(receiveMessageOnPort(port2));
// Prints: undefined
