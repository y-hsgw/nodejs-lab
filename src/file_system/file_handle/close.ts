import fs from 'node:fs/promises';
import path from 'node:path';

const fileName = 'thefile.txt';
const filePath = path.join(import.meta.dirname, fileName);
await fs.writeFile(filePath, 'hoge');

let fileHandle;
try {
  fileHandle = await fs.open(filePath, 'r');
  console.log(fileHandle);
} finally {
  fileHandle?.close();
}
