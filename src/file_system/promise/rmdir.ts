import { access, mkdir, rmdir } from 'node:fs/promises';
import path from 'node:path';

const dirPath = path.join(import.meta.dirname, 'testDir');

try {
  await mkdir(dirPath);
  await access(dirPath);
  await rmdir(dirPath);
  await access(dirPath); // dirPathのディレクトリを削除しているので、ここでエラーになる;
} catch (error) {
  console.log(error);
}
