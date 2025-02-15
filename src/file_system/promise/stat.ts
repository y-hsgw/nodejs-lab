import { stat, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';

const fileName = 'thefile.txt';
const filePath = path.join(import.meta.dirname, fileName);

try {
  await writeFile(filePath, 'hogehoge');
  const result = await stat(filePath);
  console.log(result);
} finally {
  await unlink(filePath);
}
