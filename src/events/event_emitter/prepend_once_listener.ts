import { EventEmitter } from 'node:events';

const eventEmitter = new EventEmitter();
eventEmitter.prependOnceListener('foo', function callback() {});

console.log(eventEmitter.emit('foo'));
console.log(eventEmitter.emit('foo'));
