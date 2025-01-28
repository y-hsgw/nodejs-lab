import { constants, copyFile, stat, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';

const fileName = 'thefile.txt';
const copyFileName = 'thefile_copy.txt';
const filePath = path.join(import.meta.dirname, fileName);
const copyFilePath = path.join(import.meta.dirname, copyFileName);

try {
  await writeFile(filePath, 'hogehoge');
  await copyFile(filePath, copyFilePath, constants.COPYFILE_EXCL);
} finally {
  await unlink(filePath);
  await unlink(copyFilePath);
}
