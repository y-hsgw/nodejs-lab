import { open, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';

const fileName = 'thefile.txt';
const filePath = path.join(import.meta.dirname, fileName);

await writeFile(filePath, 'Hello, this is a sample text file.');
const fileHandle = await open(filePath, 'r+');
try {
  await fileHandle.truncate(5);
  const truncatedContent = await fileHandle.readFile({ encoding: 'utf8' });
  console.log(truncatedContent); // "Hello"
} finally {
  await fileHandle.close();
  await unlink(filePath);
}
