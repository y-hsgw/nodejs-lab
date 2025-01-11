import { open, writeFile, unlink, type FileHandle } from 'node:fs/promises';
import path from 'node:path';

const fileName = 'thefile.txt';
const filePath = path.join(import.meta.dirname, fileName);
let fileHandle: FileHandle | undefined;

try {
  await writeFile(filePath, '');
  fileHandle = await open(filePath, 'w');
  const stream = fileHandle.createWriteStream();

  stream.write('Hello');
  stream.end('Goodbye!\n');

  stream.on('finish', () => {
    console.log('Stream ended');
  });

  stream.on('error', (err) => {
    console.error('Error writing to file:', err);
  });
} finally {
  await unlink(filePath);
  await fileHandle?.close();
}
