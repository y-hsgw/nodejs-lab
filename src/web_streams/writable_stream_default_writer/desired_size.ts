import { WritableStream } from 'node:stream/web';

// highWaterMarkがデフォルトのとき
{
  const stream = new WritableStream<string>({
    start() {
      console.log('start!!');
    },
  });

  const writer = stream.getWriter();
  console.log(writer.desiredSize);
  writer.write('hoge');
  console.log(writer.desiredSize);
}

console.log('----------');

// highWaterMarkを指定したとき
{
  const stream = new WritableStream<string>(
    {
      start() {
        console.log('start!!');
      },
    },
    {
      highWaterMark: 2,
    },
  );

  const writer = stream.getWriter();
  console.log(writer.desiredSize);
  writer.write('hoge');
  console.log(writer.desiredSize);
}
