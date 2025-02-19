import { writeFile, unlink, access } from 'node:fs/promises';
import path from 'node:path';

const fileName = 'thefile.txt';
const filePath = path.join(import.meta.dirname, fileName);
try {
  await writeFile(filePath, 'hogehogehogehoge');
  await access(filePath);
  console.log('before');
  await unlink(filePath);
  await access(filePath);
  console.log('after');
} catch (error) {
  console.error('cannot access', error);
}
