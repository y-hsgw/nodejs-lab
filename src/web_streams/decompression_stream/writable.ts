import { DecompressionStream } from 'node:stream/web';
import { gzipSync } from 'node:zlib';

const decompressionStream = new DecompressionStream('gzip');
console.log(decompressionStream.writable);

// DecompressionStream は「圧縮済みバイト列」を入力として受け取る必要がある。
// そのため検証用に、まず gzip 圧縮したバイト列を用意してから書き込む。
const originalText = 'hello world!!!';
const originalBytes = new TextEncoder().encode(originalText);
const gzipBytes = gzipSync(originalBytes); // Buffer (Uint8Array)
console.log({ originalBytes, gzipBytes });
const writer = decompressionStream.writable.getWriter();
// ストリーミングっぽく複数チャンクに分けて流す
for (let i = 0; i < gzipBytes.byteLength; i += 8) {
  await writer.write(gzipBytes.subarray(i, i + 8));
}
await writer.close();

const reader = decompressionStream.readable.getReader();
const chunks = [];
while (true) {
  const { value, done } = await reader.read();
  console.log({ value });
  if (done) break;
  chunks.push(value);
}

console.log('chunk count:', chunks.length);
console.log(
  'total bytes:',
  chunks.reduce((n, c) => n + c.byteLength, 0),
); // 合計バイト数

const decompressedBytes = Buffer.concat(chunks.map((c) => Buffer.from(c)));
const decompressedText = new TextDecoder().decode(decompressedBytes);

console.log('decompressed text:', decompressedText);
console.log('matches:', decompressedText === originalText);
