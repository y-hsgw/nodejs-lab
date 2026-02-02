import { ReadableStream } from 'node:stream/web';

// close あり
{
  const readableStream = new ReadableStream({
    type: 'bytes',
    start(controller) {
      controller.enqueue(new Uint8Array([1, 2, 3, 4]));
      controller.close();
    },
  });

  for await (const chunk of readableStream) {
    console.log('read:', chunk);
  }
}

console.log('----------');

// close なし
{
  const readableStream = new ReadableStream({
    type: 'bytes',
    start(controller) {
      controller.enqueue(new Uint8Array([1, 2, 3, 4]));
    },
  });

  for await (const chunk of readableStream) {
    console.log('read:', chunk);
  }
}
