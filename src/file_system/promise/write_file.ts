import { readFile, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';

const fileName = 'thefile.txt';
const filePath = path.join(import.meta.dirname, fileName);

try {
  await writeFile(filePath, 'hogehoge');
  const data = await readFile(filePath, { encoding: 'utf8' });
  console.log(data);
} finally {
  await unlink(filePath);
}
