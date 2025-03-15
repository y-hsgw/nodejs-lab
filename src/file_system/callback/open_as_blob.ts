import { openAsBlob } from 'node:fs';
import { unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';

const fileName = 'thefile.txt';
const filePath = path.join(import.meta.dirname, fileName);

await writeFile(filePath, 'hoge');

const blob = await openAsBlob(filePath, { type: 'text/plain' });
console.log('blob', blob);
console.log('text', await blob.text());

await unlink(filePath);
