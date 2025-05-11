import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const eventEmitter = new EventEmitter();

process.nextTick(() => {
  eventEmitter.emit('foo', 'bar');
  eventEmitter.emit('foo', 42);
});

const abortController = new AbortController();

(async () => {
  for await (const event of on(eventEmitter, 'foo')) {
    console.log(event);
  }
})();

(async () => {
  for await (const event of on(eventEmitter, 'foo', {
    signal: abortController.signal,
  })) {
    console.log(event);
  }
})();

process.nextTick(() => abortController.abort());
