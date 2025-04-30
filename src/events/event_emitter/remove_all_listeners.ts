import { EventEmitter } from 'node:events';

const eventEmitter = new EventEmitter();
function callback() {
  console.log('foo event triggered');
}
eventEmitter.on('foo', callback);
eventEmitter.on('foo', callback);
eventEmitter.on('bar', () => {
  console.log('bar event triggered');
});

eventEmitter.removeAllListeners('foo');

console.log(eventEmitter.listenerCount('foo'));
console.log(eventEmitter.listenerCount('bar'));

console.log('--- remove all listeners ---');
eventEmitter.on('foo', callback);
eventEmitter.on('foo', callback);
eventEmitter.removeAllListeners();

console.log(eventEmitter.listenerCount('foo'));
console.log(eventEmitter.listenerCount('bar'));
