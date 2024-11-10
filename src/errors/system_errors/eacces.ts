import fs from 'node:fs/promises';
import path from 'path';

const filePath = path.join(import.meta.dirname, 'readonly.txt');

// 読み取り専用ファイルを作成
await fs.writeFile(filePath, 'This is a read-only file.');
await fs.chmod(filePath, 0o444); // ファイルのパーミッションを読み取り専用に設定

try {
  await fs.writeFile(filePath, 'Trying to write to a read-only file.');
} catch (error) {
  console.error(error);
} finally {
  // パーミッションを元に戻してファイルを削除（クリーンアップ）
  await fs.chmod(filePath, 0o644);
  await fs.unlink(filePath);
}
