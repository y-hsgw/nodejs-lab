import { ReadableStreamBYOBReader, ReadableStream } from 'node:stream/web';

console.log('--- closed when stream is closed ---');
{
  const byteStream = new ReadableStream({
    type: 'bytes',
    cancel(reason) {
      console.log('Stream cancelled');
      console.log(reason);
    },
    start(controller) {
      controller.close();
    },
  });

  const reader = new ReadableStreamBYOBReader(byteStream);

  await reader.closed
    .then(() => {
      console.log('Reader closed');
    })
    .catch((err) => {
      console.error('Reader closed with error:', err);
    });
}

console.log('--- closed when stream errors ---');
{
  const byteStream = new ReadableStream({
    type: 'bytes',
    cancel(reason) {
      console.log('Stream cancelled');
      console.log(reason);
    },
    start(controller) {
      controller.error(new Error('stream error'));
    },
  });

  const reader = new ReadableStreamBYOBReader(byteStream);

  await reader.closed
    .then(() => {
      console.log('Reader closed');
    })
    .catch((err) => {
      console.error('Reader closed with error:', err);
    });
}
