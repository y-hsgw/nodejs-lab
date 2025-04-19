import { EventEmitter } from 'node:events';
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

const callback = () => {
  console.log('A');
};

myEmitter.on('hogeEvent', callback);
myEmitter.emit('hogeEvent');

myEmitter.on('removeListener', (event, listener) => {
  console.log(`removeListener: ${event}`);
  console.log(listener);
});

myEmitter.removeListener('hogeEvent', callback);
