import { open, readFile, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';

const fileName = 'thefile.txt';
const filePath = path.join(import.meta.dirname, fileName);

try {
  await writeFile(filePath, 'hogehoge');
  const fileHandle = await open(filePath, 'a');
  await fileHandle.writeFile('Hello');
  const buffer = await readFile(filePath, { encoding: 'utf-8' });
  console.log(buffer);
  await fileHandle.close();
} finally {
  await unlink(filePath);
}
