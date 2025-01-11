import fs, { type FileHandle } from 'node:fs/promises';
import path from 'node:path';

const fileName = 'thefile.txt';
const filePath = path.join(import.meta.dirname, fileName);
let fileHandle: FileHandle | undefined;

try {
  await fs.writeFile(filePath, 'hoge');
  fileHandle = await fs.open(filePath, 'r');
  let stats = await fs.stat(filePath);
  console.log(stats);
  await fileHandle.chmod(0o644);

  stats = await fs.stat(filePath);
  console.log(stats);
} finally {
  await fs.unlink(filePath);
  await fileHandle?.close();
}
