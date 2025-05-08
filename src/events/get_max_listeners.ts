import { getMaxListeners, setMaxListeners, EventEmitter } from 'node:events';

{
  const eventEmitter = new EventEmitter();
  console.log(getMaxListeners(eventEmitter)); // 10
  setMaxListeners(11, eventEmitter);
  console.log(getMaxListeners(eventEmitter)); // 11
}
{
  const eventTarget = new EventTarget();
  console.log(getMaxListeners(eventTarget)); // 10
  setMaxListeners(11, eventTarget);
  console.log(getMaxListeners(eventTarget)); // 11
}
