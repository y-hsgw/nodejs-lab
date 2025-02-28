import { access, cp, mkdir, rm, writeFile } from 'node:fs';
import path from 'node:path';

const srcFileName = 'thefile.txt';
const srcDirPath = path.join(import.meta.dirname, 'test');
const srcFilePath = path.join(srcDirPath, srcFileName);

mkdir(srcDirPath, (err) => {
  if (err) throw err;

  writeFile(srcFilePath, 'hoge', (err) => {
    if (err) throw err;

    const destDirFilePath = path.join(import.meta.dirname, 'hoge');

    cp(srcDirPath, destDirFilePath, { recursive: true }, (err) => {
      if (err) throw err;
      console.log(`Directory ${srcDirPath} copied successfully!`);

      access(destDirFilePath, (err) => {
        if (err) throw err;
        console.log(`access ${destDirFilePath}`);
      });

      rm(srcDirPath, { recursive: true }, (err) => {
        if (err) throw err;
        console.log(`Directory ${srcDirPath} deleted successfully!`);
      });

      rm(destDirFilePath, { recursive: true }, (err) => {
        if (err) throw err;
        console.log(`Directory ${destDirFilePath} deleted successfully!`);
      });
    });
  });
});
