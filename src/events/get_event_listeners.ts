import { getEventListeners, EventEmitter } from 'node:events';

{
  const eventEmitter = new EventEmitter();
  const listener = () => console.log('Events are fun');
  eventEmitter.on('foo', listener);
  console.log(getEventListeners(eventEmitter, 'foo'));
}
{
  const eventTarget = new EventTarget();
  const listener = () => console.log('Events are fun');
  eventTarget.addEventListener('foo', listener);
  console.log(getEventListeners(eventTarget, 'foo'));
}
