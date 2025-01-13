import { open, writeFile, unlink, type FileHandle } from 'node:fs/promises';
import path from 'node:path';
import { Buffer } from 'node:buffer';

const fileName = 'thefile.txt';
const filePath = path.join(import.meta.dirname, fileName);
let fileHandle: FileHandle | undefined;

try {
  await writeFile(filePath, 'hoge');
  fileHandle = await open(filePath, 'r');
  const { buffer, bytesRead } = await fileHandle.read({
    buffer: Buffer.alloc(5, 'a'),
  });
  console.log('buffer', buffer);
  console.log('bytesRead', bytesRead);
} finally {
  await unlink(filePath);
  await fileHandle?.close();
}
