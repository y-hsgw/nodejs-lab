import { ReadableStream } from 'node:stream/web';

const rs = new ReadableStream<string>({
  start(c) {
    c.enqueue('a');
    c.enqueue('b');
    c.close();
  },
});

console.log('locked (start):', rs.locked);

const reader = rs.getReader();
console.log('locked (after getReader):', rs.locked);

const first = await reader.read();
console.log('read via reader:', first);

console.log('locked (before releaseLock):', rs.locked);
reader.releaseLock();
console.log('locked (after releaseLock):', rs.locked);

for await (const chunk of rs) {
  console.log('read via for await:', chunk);
}
