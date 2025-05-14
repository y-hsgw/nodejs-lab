import { EventEmitterAsyncResource } from 'node:events';
import { executionAsyncId } from 'node:async_hooks';

const eventEmitterAsyncResource = new EventEmitterAsyncResource({ name: 'Q' });

eventEmitterAsyncResource.on('foo', () => {
  console.log(executionAsyncId() === eventEmitterAsyncResource.asyncId);
});

Promise.resolve().then(() => {
  eventEmitterAsyncResource.emit('foo');
});
