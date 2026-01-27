import { ReadableStream, ReadableStreamBYOBReader } from 'node:stream/web';

const byteStream = new ReadableStream({
  type: 'bytes',
  start(controller) {
    controller.enqueue(new Uint8Array([1, 2, 3, 4]));
    controller.close();
  },
});

const reader = new ReadableStreamBYOBReader(byteStream);

console.log('locked (before releaseLock):', byteStream.locked);

reader.releaseLock();

console.log('locked (after releaseLock):', byteStream.locked);

// releaseLock を実行しないと ERR_INVALID_STATE エラーになる
for await (const chunk of byteStream) {
  console.log('read via for await:', chunk);
}
