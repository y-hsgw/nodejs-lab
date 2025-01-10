import { open, writeFile, unlink } from 'node:fs/promises';
import path from 'node:path';

const fileName = 'thefile.txt';
const filePath = path.join(import.meta.dirname, fileName);
try {
  await writeFile(filePath, 'hogehogehogehoge');
  const fileHandle = await open(filePath, 'r');
  const stream = fileHandle.createReadStream({ start: 0, end: 3 });
  stream.on('data', (chunk) => {
    console.log(`Read chunk: ${chunk}`);
    // Read chunk: hoge
  });
  stream.on('end', () => {
    console.log('Stream ended');
  });
} finally {
  await unlink(filePath);
}
