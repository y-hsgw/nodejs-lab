import { open, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';

const fileName = 'thefile.txt';
const filePath = path.join(import.meta.dirname, fileName);

try {
  await writeFile(filePath, 'hogehoge');
  const fileHandle = await open(filePath, 'r');
  const before = await fileHandle.stat();
  console.log('before', before.atime, before.mtime);
  const now = new Date();
  const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);
  await fileHandle.utimes(oneHourAgo, now);
  const after = await fileHandle.stat();
  console.log('after', after.atime, after.mtime);

  await fileHandle.close();
} finally {
  await unlink(filePath);
}
