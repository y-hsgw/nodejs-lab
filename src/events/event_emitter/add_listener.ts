import { EventEmitter } from 'node:events';
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

const callback = () => {
  console.log('A');
};

myEmitter.addListener('hogeEvent', callback);

myEmitter.emit('hogeEvent');
