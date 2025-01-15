import { open, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';

const fileName = 'thefile.txt';
const filePath = path.join(import.meta.dirname, fileName);

try {
  await writeFile(filePath, 'hogehoge');
  const fileHandle = await open(filePath, 'r');
  // readメソッド実行後にreadFileが実行された時は、readメソッドで読み込んだ位置からファイルの終わりまで読み込まれる。
  // 常にファイルの先頭から読み込まれるわけではない。下記コメントアウトを有効化すると途中から読み込まれていることを確認できる。
  // await fileHandle.read({ length: 1 });
  const buffer = await fileHandle.readFile();
  console.log(buffer);
  await fileHandle.close();
} finally {
  await unlink(filePath);
}
