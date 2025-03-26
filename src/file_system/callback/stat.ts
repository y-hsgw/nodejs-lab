import { mkdir, rm, stat, writeFile } from 'node:fs';
import path from 'node:path';

const srcFileName = 'thefile.txt';
const srcDirPath = path.join(import.meta.dirname, 'test');
const srcFilePath = path.join(srcDirPath, srcFileName);

mkdir(srcDirPath, (err) => {
  if (err) throw err;

  writeFile(srcFilePath, 'hoge', (err) => {
    if (err) throw err;

    stat(srcFilePath, { bigint: true }, (err, stats) => {
      if (err) throw err;
      console.log(stats.isDirectory());
      console.log(stats);
    });

    stat(srcDirPath, (err, stats) => {
      if (err) throw err;
      console.log(stats.isDirectory());
      console.log(stats);

      rm(srcDirPath, { recursive: true }, (err) => {
        if (err) throw err;
        console.log(`Directory ${srcDirPath} deleted successfully!`);
      });
    });
  });
});
