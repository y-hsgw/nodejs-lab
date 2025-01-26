import { chmod, constants, stat, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';

const fileName = 'thefile.txt';
const filePath = path.join(import.meta.dirname, fileName);

try {
  await writeFile(filePath, 'hogehoge');
  console.log((await stat(filePath)).mode);
  await chmod(filePath, constants.X_OK);
  console.log((await stat(filePath)).mode);
  await chmod(filePath, constants.R_OK);
  console.log((await stat(filePath)).mode);
} finally {
  await unlink(filePath);
}
