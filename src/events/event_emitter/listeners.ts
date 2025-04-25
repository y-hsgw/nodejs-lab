import { EventEmitter } from 'node:events';

const eventEmitter = new EventEmitter();
eventEmitter.on('foo', function callback() {});

console.log(eventEmitter.listeners('foo'));
