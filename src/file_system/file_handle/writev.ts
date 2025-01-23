import { open, readFile, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';

const fileName = 'thefile.txt';
const filePath = path.join(import.meta.dirname, fileName);

try {
  await writeFile(filePath, 'hogehoge');
  const fileHandle = await open(filePath, 'a+');
  const buffers = [
    Buffer.from('Hello, '),
    Buffer.from('this is '),
    Buffer.from('writev!'),
  ];
  const result = await fileHandle.writev(buffers);
  console.log(result);
  console.log(await readFile(filePath, { encoding: 'utf-8' }));
  await fileHandle.close();
} finally {
  await unlink(filePath);
}
