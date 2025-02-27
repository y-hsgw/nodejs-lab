import { copyFile, readFile, unlink, writeFile } from 'node:fs';
import path from 'node:path';

const srcFileName = 'thefile.txt';
const srcFilePath = path.join(import.meta.dirname, srcFileName);

writeFile(srcFilePath, 'hoge', (err) => {
  if (err) throw err;

  const deftFileName = 'thefile-copy.txt';
  const destFilePath = path.join(import.meta.dirname, deftFileName);

  copyFile(srcFilePath, destFilePath, (err) => {
    if (err) throw err;
    console.log(`File ${srcFileName} copied successfully!`);

    readFile(destFilePath, (err, data) => {
      if (err) throw err;

      console.log(`${srcFileName} content: ${data}`);

      unlink(srcFilePath, (err) => {
        if (err) throw err;
        console.log(`File ${srcFileName} deleted successfully!`);
      });

      unlink(destFilePath, (err) => {
        if (err) throw err;
        console.log(`File ${deftFileName} deleted successfully!`);
      });
    });
  });
});
