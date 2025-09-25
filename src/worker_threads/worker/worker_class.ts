import assert from 'node:assert';
import {
  Worker,
  MessageChannel,
  MessagePort,
  isMainThread,
  parentPort,
} from 'node:worker_threads';

console.log('isMainThread:', isMainThread);

if (isMainThread) {
  const worker = new Worker(new URL(import.meta.url));
  const subChannel = new MessageChannel();
  worker.postMessage({ hereIsYourPort: subChannel.port1 }, [subChannel.port1]);
  subChannel.port2.on('message', (value) => {
    console.log('received:', value);
  });
} else {
  parentPort?.once('message', (value) => {
    assert(value.hereIsYourPort instanceof MessagePort);
    value.hereIsYourPort.postMessage('the worker is sending this');
    value.hereIsYourPort.close();
  });
}
