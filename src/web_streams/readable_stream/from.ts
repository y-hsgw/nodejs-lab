import { ReadableStream, WritableStream } from 'node:stream/web';
{
  async function* asyncIterableGenerator() {
    yield 'a';
    yield 'b';
    yield 'c';
  }

  const stream = ReadableStream.from(asyncIterableGenerator());

  for await (const chunk of stream) console.log(chunk); // Prints: 'a', 'b', 'c'
}

{
  async function* asyncIterableGenerator() {
    yield Buffer.from('a');
    yield Buffer.from('b');
    yield Buffer.from('c');
  }

  const stream = ReadableStream.from(asyncIterableGenerator());

  const writableStream = new WritableStream({
    write(chunk) {
      console.log('write:', chunk);
    },
  });
  await stream.pipeTo(writableStream);
}
