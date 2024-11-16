import fs from 'fs/promises';
import path from 'path';

const testDir = path.join(import.meta.dirname, 'nonEmptyDir');
const fileInDir = path.join(testDir, 'testFile.txt');

try {
  // サンプルの非空ディレクトリを作成
  await fs.mkdir(testDir, { recursive: true });
  await fs.writeFile(fileInDir, 'This is a test file.');

  console.log(
    `ディレクトリ ${testDir} とファイル ${fileInDir} を作成しました。`,
  );

  // 非空のディレクトリを削除しようとする
  await fs.rmdir(testDir);
} catch (error) {
  console.log(error);
} finally {
  // クリーンアップ
  await fs.rm(testDir, { recursive: true, force: true });
  console.log('クリーンアップが完了しました。');
}
