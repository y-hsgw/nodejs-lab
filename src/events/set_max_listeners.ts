import { setMaxListeners, EventEmitter } from 'node:events';

const target = new EventTarget();
const eventEmitter = new EventEmitter();

Array.from({ length: 10 }).forEach(() => {
  eventEmitter.on('foo', function callback() {
    console.log('foo event triggered');
  });
  target.addEventListener('bar', function callback() {
    console.log('bar event triggered');
  });
});

setMaxListeners(11, target, eventEmitter);

Array.from({ length: 10 }).forEach(() => {
  eventEmitter.on('foo', function callback() {
    console.log('foo event triggered');
  });
  target.addEventListener('bar', function callback() {
    console.log('bar event triggered');
  });
});
