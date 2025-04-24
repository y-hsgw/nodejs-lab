import { EventEmitter } from 'node:events';

const eventEmitter = new EventEmitter();
eventEmitter.on('foo', () => {});
eventEmitter.on('foo', () => {});
eventEmitter.on('bar', () => {});

console.log(eventEmitter.listenerCount('foo'));
console.log(eventEmitter.listenerCount('bar'));
