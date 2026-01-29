import { ReadableStream } from 'node:stream/web';

// highWaterMarkがデフォルトのとき
{
  const readableStream = new ReadableStream({
    start(controller) {
      console.log(controller.desiredSize);
      controller.enqueue('first');
      console.log(controller.desiredSize);
      controller.enqueue('second');
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
      start(controller) {
        console.log(controller.desiredSize);
        controller.enqueue('first');
        console.log(controller.desiredSize);
        controller.enqueue('second');
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
