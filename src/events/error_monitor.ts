import EventEmitter, { errorMonitor } from 'node:events';

const eventEmitter = new EventEmitter();
function callback() {
  console.log('callback');
}
eventEmitter.on('foo', callback);
eventEmitter.on(errorMonitor, callback);

eventEmitter.emit('error');
