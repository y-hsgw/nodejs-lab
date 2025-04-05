import { readFile, rm, writeFile } from 'node:fs';
import { Buffer } from 'node:buffer';
import path from 'node:path';

const data = new Uint8Array(Buffer.from('Hello Node.js'));
const fileName = 'thefile.txt';
const filePath = path.join(import.meta.dirname, fileName);

writeFile(filePath, data, (err) => {
  if (err) throw err;

  readFile(filePath, (err, data) => {
    if (err) throw err;
    console.log(data);

    rm(filePath, (err) => {
      if (err) throw err;
      console.log(`The file ${filePath} was deleted!`);
    });
  });
});
