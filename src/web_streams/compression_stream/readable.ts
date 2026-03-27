import { CompressionStream } from 'node:stream/web';

const compressionStream = new CompressionStream('gzip');
console.log(compressionStream.readable);

const writer = compressionStream.writable.getWriter();
await writer.write(new TextEncoder().encode('hello'));
await writer.write(new TextEncoder().encode('world'));
await writer.write(new TextEncoder().encode('!!!'));
await writer.close();

const reader = compressionStream.readable.getReader();
const chunks = [];
while (true) {
  const { value, done } = await reader.read();
  if (done) break;
  chunks.push(value);
}

console.log('chunk count:', chunks.length);
console.log(
  'total bytes:',
  chunks.reduce((n, c) => n + c.byteLength, 0),
); // 合計バイト数
