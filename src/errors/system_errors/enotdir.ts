import fs from 'node:fs/promises';
import path from 'path';

const filePath = path.join(import.meta.dirname, 'example.txt');

// example.txtというファイルを作成
fs.writeFile(filePath, 'This is a sample file.');

try {
  fs.readdir(filePath);
} catch (err) {
  console.error(err);
}
