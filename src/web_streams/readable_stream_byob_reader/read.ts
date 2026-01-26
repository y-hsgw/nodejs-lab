import { ReadableStream, ReadableStreamBYOBReader } from 'node:stream/web';

const byteStream = new ReadableStream({
  type: 'bytes',
  cancel(reason) {
    console.log('Stream cancelled');
    console.log(reason);
  },
  start(controller) {
    controller.enqueue(new Uint8Array([1, 255, 3, 4]));
    controller.close();
  },
});

const reader = new ReadableStreamBYOBReader(byteStream);

{
  const { done, value } = await reader.read(new Uint8Array(1));
  console.log('Read done:', done);
  console.log('Read value:', value);
}

{
  const { done, value } = await reader.read(new Uint8Array(3));
  console.log('Read done:', done);
  console.log('Read value:', value);
}
