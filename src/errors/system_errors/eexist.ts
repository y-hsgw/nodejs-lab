import fs from 'fs';
import path from 'path';

const dirPath = path.join(import.meta.dirname, 'testDir');

// 1. ディレクトリを作成
fs.mkdirSync(dirPath);
console.log(`ディレクトリ '${dirPath}' を作成しました`);

// 2. 同じディレクトリを再作成し、EEXISTエラーを発生させる
try {
  fs.mkdirSync(dirPath);
} catch (error) {
  console.log(error);
} finally {
  // 後片付けとしてディレクトリを削除
  fs.rmdirSync(dirPath);
}
