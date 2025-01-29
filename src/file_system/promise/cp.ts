import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

const srcDirPath = path.join(import.meta.dirname, 'src');
const destDirPath = path.join(import.meta.dirname, 'dest');
const srcFile = path.join(srcDirPath, 'file.txt');
const destFile = path.join(destDirPath, 'file.txt');

try {
  await mkdir(srcDirPath, { recursive: true });
  await writeFile(srcFile, 'Hello, world!');

  await cp(srcDirPath, destDirPath, { recursive: true });

  // コピーされたファイルを確認
  const copiedContent = await readFile(destFile, 'utf8');
  console.log('Copied file content:', copiedContent);
} finally {
  await rm(srcDirPath, { recursive: true });
  await rm(destDirPath, { recursive: true });
}
