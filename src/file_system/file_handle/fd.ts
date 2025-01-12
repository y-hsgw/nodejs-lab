import { open, writeFile, unlink, type FileHandle } from 'node:fs/promises';
import path from 'node:path';

const fileName = 'thefile.txt';
const filePath = path.join(import.meta.dirname, fileName);
let fileHandle: FileHandle | undefined;

try {
  await writeFile(filePath, '');
  fileHandle = await open(filePath, 'w');
  console.log(fileHandle.fd);
} finally {
  await unlink(filePath);
  await fileHandle?.close();
}
