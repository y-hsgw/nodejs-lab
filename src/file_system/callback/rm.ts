import { mkdir, rm, writeFile } from 'node:fs';
import path from 'node:path';

{
  const testDir = path.join(import.meta.dirname, 'nonEmptyDir');

  mkdir(testDir, (err) => {
    if (err) throw err;
    console.log(`Directory ${testDir} created!`);

    rm(testDir, { recursive: true }, (err) => {
      if (err) throw err;
      console.log(`Directory ${testDir} deleted!`);
    });
  });
}

{
  const fileName = 'thefile.txt';
  const filePath = path.join(import.meta.dirname, fileName);

  writeFile(filePath, 'hoge', (err) => {
    if (err) throw err;
    console.log(`File ${fileName} created!`);

    rm(filePath, (err) => {
      if (err) throw err;
      console.log(`Directory ${filePath} deleted!`);
    });
  });
}
