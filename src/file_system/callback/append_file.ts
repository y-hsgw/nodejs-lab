import { appendFile, unlink } from 'node:fs';
import path from 'node:path';

const fileName = 'thefile.txt';
const filePath = path.join(import.meta.dirname, fileName);

appendFile(filePath, 'data to append', (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});

unlink(filePath, (err) => {
  if (err) throw err;
  console.log('remove file!');
});
