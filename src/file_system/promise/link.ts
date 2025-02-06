import { link, unlink, writeFile, stat } from 'node:fs/promises';
import path from 'node:path';

const existingPath = path.join(import.meta.dirname, 'original.txt');
const newPath = path.join(import.meta.dirname, 'hardlink.txt');

try {
  // 元ファイルを作成
  await writeFile(existingPath, 'Hello, world!');

  // ハードリンクを作成
  await link(existingPath, newPath);
  console.log(`Hard link created: ${newPath}`);

  // 確認: 両方のファイルが同じ inode を持つかチェック
  const stat1 = await stat(existingPath);
  const stat2 = await stat(newPath);
  console.log(`Inode of original: ${stat1.ino}`);
  console.log(`Inode of hard link: ${stat2.ino}`);

  if (stat1.ino === stat2.ino) {
    console.log('✅ Both files are hard links to the same inode.');
  } else {
    console.log('❌ Hard link creation failed.');
  }
} catch (err) {
  console.error('Error:', err);
} finally {
  // ファイル削除
  await unlink(existingPath);
  await unlink(newPath);
}
