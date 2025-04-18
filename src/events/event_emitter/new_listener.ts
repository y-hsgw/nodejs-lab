import { EventEmitter } from 'node:events';
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.once('newListener', (event, listener) => {
  if (event === 'event') {
    myEmitter.on('event', () => {
      console.log('B');
    });
  }

  console.log(listener);
});
myEmitter.on('event', () => {
  console.log('A');
});
myEmitter.emit('event');
