import { stat, unlink, utimes, writeFile } from 'node:fs/promises';
import path from 'node:path';

const fileName = 'thefile.txt';
const filePath = path.join(import.meta.dirname, fileName);

try {
  await writeFile(filePath, 'hogehoge');
  const now = new Date();
  const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);
  console.log('before', (await stat(filePath)).atime);
  await utimes(filePath, oneHourAgo, now);
  console.log('after', (await stat(filePath)).atime);
} finally {
  await unlink(filePath);
}
