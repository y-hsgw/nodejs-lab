import { open, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';

const fileName = 'thefile.txt';
const filePath = path.join(import.meta.dirname, fileName);

try {
  await writeFile(filePath, 'hogehoge\nfoofoo\nあああ');
  const fileHandle = await open(filePath, 'r');

  // readLinesはファイルを1行ずつ読み取る
  for await (const line of fileHandle.readLines()) {
    console.log('line', line);
  }
  await fileHandle.close();
} finally {
  await unlink(filePath);
}
