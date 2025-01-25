import { appendFile, readFile, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';

const fileName = 'thefile.txt';
const filePath = path.join(import.meta.dirname, fileName);

try {
  await writeFile(filePath, 'hogehoge');
  await appendFile(filePath, 'foofoo');

  console.log(await readFile(filePath, { encoding: 'utf-8' }));
} finally {
  await unlink(filePath);
}
