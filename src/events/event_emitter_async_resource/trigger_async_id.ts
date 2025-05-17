import { EventEmitterAsyncResource } from 'node:events';
import { triggerAsyncId } from 'node:async_hooks';

setTimeout(() => {
  const emitter = new EventEmitterAsyncResource({ name: 'fromTimeout' });

  emitter.on('foo', () => {
    console.log('emitter.triggerAsyncId:', emitter.triggerAsyncId);
    console.log('current triggerAsyncId():', triggerAsyncId());
  });

  emitter.emit('foo');
}, 0);
