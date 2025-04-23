import { EventEmitter } from 'node:events';

const eventEmitter = new EventEmitter();

console.log(eventEmitter.getMaxListeners());
