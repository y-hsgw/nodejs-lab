import {
  lutimes,
  symlink,
  stat,
  unlink,
  writeFile,
  lstat,
} from 'node:fs/promises';
import path from 'node:path';

const targetFile = path.join(import.meta.dirname, 'target.txt');
const symlinkPath = path.join(import.meta.dirname, 'test-symlink');

try {
  // 1. 実際のファイルを作成
  await writeFile(targetFile, 'Hello, world!');

  // 2. シンボリックリンクを作成
  await symlink(targetFile, symlinkPath);
  console.log('Symlink created:', symlinkPath);

  // 3. 現在のシンボリックリンクのタイムスタンプを確認
  let stats = await stat(symlinkPath);
  console.log('Before lutimes - atime:', stats.atime, 'mtime:', stats.mtime);

  // 4. シンボリックリンクのタイムスタンプを変更
  const newAtime = new Date('2024-01-01T12:00:00Z');
  const newMtime = new Date('2024-01-02T12:00:00Z');
  await lutimes(symlinkPath, newAtime, newMtime);

  // 5. 変更後のシンボリックリンクのタイムスタンプを確認
  stats = await lstat(symlinkPath);
  console.log('lstat - atime:', stats.atime, 'mtime:', stats.mtime);

  // 6. シンボリックリンク参照先のタイムスタンプを確認
  stats = await stat(symlinkPath);
  console.log('stat - atime:', stats.atime, 'mtime:', stats.mtime);
} catch (error) {
  console.error('Error:', error);
} finally {
  // 6. クリーンアップ
  await unlink(symlinkPath);
  await unlink(targetFile);
}
