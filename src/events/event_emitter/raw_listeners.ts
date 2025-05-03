import { EventEmitter } from 'node:events';
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

const listeners = emitter.rawListeners('log');
console.log(listeners);
const logFnWrapper = listeners[0];

logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
const newListeners = emitter.rawListeners('log');

newListeners[0]();
emitter.emit('log');
