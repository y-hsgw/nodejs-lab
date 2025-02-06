import { open, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';

const fileName = 'thefile.txt';
const filePath = path.join(import.meta.dirname, fileName);

try {
  await writeFile(filePath, 'hogehoge');
  const fileHandle = await open(filePath, 'a');
  console.log(fileHandle);
  await fileHandle.close();
} finally {
  await unlink(filePath);
}
