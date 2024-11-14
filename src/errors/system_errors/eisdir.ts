import fs from 'node:fs/promises';
import path from 'node:path';

const dirPath = path.join(import.meta.dirname, 'testDir');

await fs.mkdir(dirPath);

// ディレクトリをファイルのように読み込もうとして、EISDIRエラーを発生させる
try {
  const data = await fs.readFile(dirPath, 'utf8');
  console.log(data);
} catch (error) {
  console.log(error);
} finally {
  await fs.rmdir(dirPath);
}
