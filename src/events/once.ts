import { once, EventEmitter } from 'node:events';
import process from 'node:process';

const eventEmitter = new EventEmitter();

process.nextTick(() => {
  eventEmitter.emit('myevent', 42);
});

const [value] = await once(eventEmitter, 'myevent');
console.log(value);

const err = new Error('kaboom');
process.nextTick(() => {
  eventEmitter.emit('error', err);
});

try {
  await once(eventEmitter, 'myevent');
} catch (err) {
  console.error('error happened', err);
}

const abortController = new AbortController();

async function foo(emitter: EventEmitter, event: string, signal: AbortSignal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted!');
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!');
    } else if (error instanceof Error) {
      console.error('There was an error', error.message);
    } else {
      console.error('Unknown error:', error);
    }
  }
}

foo(eventEmitter, 'foo', abortController.signal);
abortController.abort();
