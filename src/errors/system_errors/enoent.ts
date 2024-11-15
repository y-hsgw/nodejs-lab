import fs from 'fs/promises';
import path from 'path';

const nonExistentFilePath = path.join(import.meta.dirname, 'nonexistent.txt');

try {
  // 存在しないファイルを読み込もうとする
  const data = await fs.readFile(nonExistentFilePath, 'utf8');
  console.log(data);
} catch (error) {
  console.log(error);
}
