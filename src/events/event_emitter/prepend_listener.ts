import { EventEmitter } from 'node:events';

const eventEmitter = new EventEmitter();
eventEmitter.on('foo', function callback() {});
eventEmitter.prependListener('foo', function prependListenerCallback() {});

console.log(eventEmitter.listeners('foo'));
