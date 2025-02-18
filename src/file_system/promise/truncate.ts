import { readFile, truncate, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';

const fileName = 'thefile.txt';
const filePath = path.join(import.meta.dirname, fileName);

try {
  await writeFile(filePath, 'Hello, this is a sample text file.');
  const before = await readFile(filePath, { encoding: 'utf8' });
  console.log(before); // "Hello, this is a sample text file.""

  await truncate(filePath, 5);
  const after = await readFile(filePath, { encoding: 'utf8' });
  console.log(after); // "Hello"
} finally {
  await unlink(filePath);
}
