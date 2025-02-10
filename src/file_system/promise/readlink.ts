import { symlink, unlink, writeFile, readlink } from 'node:fs/promises';
import path from 'node:path';

const targetFile = path.join(import.meta.dirname, 'target.txt');
const symlinkPath = path.join(import.meta.dirname, 'test-symlink');

try {
  // 1. 実際のファイルを作成
  await writeFile(targetFile, 'Hello, world!');

  // 2. シンボリックリンクを作成
  await symlink(targetFile, symlinkPath);

  const link = await readlink(symlinkPath);
  console.log(link);
} catch (error) {
  console.error('Error:', error);
} finally {
  await unlink(symlinkPath);
  await unlink(targetFile);
}
