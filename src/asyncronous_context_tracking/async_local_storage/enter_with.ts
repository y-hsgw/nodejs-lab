import { AsyncLocalStorage } from 'node:async_hooks';
import { EventEmitter } from 'node:events';

const asyncLocalStorage = new AsyncLocalStorage();

const store = { id: 1 };

const emitter = new EventEmitter();

emitter.on('my-event', () => {
  asyncLocalStorage.enterWith(store);
});

emitter.on('my-event', () => {
  console.log('my-event', asyncLocalStorage.getStore()); // Returns the same object
});

console.log('before', asyncLocalStorage.getStore()); // Returns undefined)
emitter.emit('my-event');
console.log('after', asyncLocalStorage.getStore()); // Returns the same object
