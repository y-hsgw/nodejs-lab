import { readFile, rm, truncate, writeFile } from 'node:fs';
import path from 'node:path';

const fileName = 'thefile.txt';
const filePath = path.join(import.meta.dirname, fileName);

writeFile(filePath, 'Hello, this is a sample text file.', (err) => {
  if (err) throw err;
  console.log('The "Hello, this is a sample text file." was wrote to file!');

  truncate(filePath, 5, (err) => {
    if (err) throw err;

    readFile(filePath, { encoding: 'utf8' }, (err, data) => {
      if (err) throw err;
      console.log(data);

      rm(filePath, (err) => {
        if (err) throw err;
        console.log(`The file ${filePath} was deleted!`);
      });
    });
  });
});
