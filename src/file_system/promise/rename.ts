import {
  writeFile,
  lstat,
  rename,
  readFile,
  access,
  mkdir,
  readdir,
  unlink,
} from 'node:fs/promises';
import path from 'node:path';

const targetFile = path.join(import.meta.dirname, 'hoge.txt');
const renamedFile = path.join(import.meta.dirname, 'foo.txt');

try {
  await writeFile(targetFile, 'hoge');
  await access(targetFile);

  await rename(targetFile, renamedFile);
  await access(renamedFile);
  await access(targetFile); // renameして元のファイルパスは存在しなくなるためエラーが発生する
} catch (error) {
  console.error(error);
} finally {
  await unlink(renamedFile);
}
