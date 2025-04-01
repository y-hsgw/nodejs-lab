import { rm, stat, utimes, writeFile } from 'node:fs';
import path from 'node:path';

const fileName = 'thefile.txt';
const filePath = path.join(import.meta.dirname, fileName);

writeFile(filePath, 'Hello, this is a sample text file.', (err) => {
  if (err) throw err;

  stat(filePath, (err, stats) => {
    if (err) throw err;
    console.log('before:', stats.atime, stats.mtime);
    const now = new Date();
    const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);

    utimes(filePath, oneHourAgo, now, (err) => {
      if (err) throw err;

      stat(filePath, (err, stats) => {
        if (err) throw err;
        console.log('after:', stats.atime, stats.mtime);

        rm(filePath, (err) => {
          if (err) throw err;
          console.log(`The file ${filePath} was deleted!`);
        });
      });
    });
  });
});
