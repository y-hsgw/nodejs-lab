import { ReadableStream } from 'node:stream/web';

// highWaterMarkがデフォルトのとき
{
  const readableStream = new ReadableStream({
    type: 'bytes',
    start(controller) {
      console.log(controller.desiredSize);
      controller.enqueue(new Uint8Array([1, 2, 3, 4]));
      console.log(controller.desiredSize);
      controller.enqueue(new Uint8Array([5, 6, 7, 8]));
      console.log(controller.desiredSize);
      controller.close();
    },
  });

  for await (const chunk of readableStream) {
    console.log('read:', chunk);
  }
}

console.log('----------');

// highWaterMarkを指定したとき
{
  const readableStream = new ReadableStream(
    {
      type: 'bytes',
      start(controller) {
        console.log(controller.desiredSize);
        controller.enqueue(new Uint8Array([1, 2, 3, 4]));
        console.log(controller.desiredSize);
        controller.enqueue(new Uint8Array([5, 6, 7, 8]));
        console.log(controller.desiredSize);
        controller.close();
      },
    },
    {
      highWaterMark: 2,
    },
  );

  for await (const chunk of readableStream) {
    console.log('read:', chunk);
  }
}
