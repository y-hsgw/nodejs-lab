import { open, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';

const fileName = 'thefile.txt';
const filePath = path.join(import.meta.dirname, fileName);

try {
  const largeData = 'a'.repeat(100 * 1024); // 100KB = 600 * 1024 bytes
  await writeFile(filePath, largeData);
  const fileHandle = await open(filePath, 'r');
  for await (const chunk of fileHandle.readableWebStream()) console.log(chunk);

  await fileHandle.close();
} finally {
  await unlink(filePath);
}
