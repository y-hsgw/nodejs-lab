import { ReadableStream } from 'node:stream/web';

// close あり
{
  const readableStream = new ReadableStream({
    start(controller) {
      controller.enqueue('first');
      controller.close();
    },
  });

  for await (const chunk of readableStream) {
    console.log('read:', chunk);
  }
}

// close なし
{
  const readableStream = new ReadableStream({
    start(controller) {
      controller.enqueue('first');
    },
  });

  for await (const chunk of readableStream) {
    console.log('read:', chunk);
  }
}
