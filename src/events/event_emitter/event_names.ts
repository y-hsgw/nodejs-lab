import { EventEmitter } from 'node:events';

const eventEmitter = new EventEmitter();
eventEmitter.on('foo', () => {});
eventEmitter.on('bar', () => {});

const symbol = Symbol('symbol');
eventEmitter.on(symbol, () => {});

console.log(eventEmitter.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
