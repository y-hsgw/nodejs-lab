import { EventEmitter } from 'node:events';

const eventEmitter = new EventEmitter();
eventEmitter.once('foo', function callback() {
  console.log('foo event triggered');
});

console.log(eventEmitter.emit('foo'));
console.log(eventEmitter.emit('foo'));
