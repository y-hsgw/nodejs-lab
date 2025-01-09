import fs from 'node:fs/promises';
import path from 'node:path';

const fileName = 'thefile.txt';
const filePath = path.join(import.meta.dirname, fileName);
await fs.writeFile(filePath, 'hoge');

let fileHandle;
try {
  fileHandle = await fs.open(filePath, 'r');
  let stats = await fs.stat(filePath);
  console.log(stats);
  await fileHandle.chmod(0o644);

  stats = await fs.stat(filePath);
  console.log(stats);
} finally {
  fileHandle?.close();
}
