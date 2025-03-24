import { mkdir, rmdir, writeFile } from 'node:fs';
import path from 'node:path';

{
  const testDir = path.join(import.meta.dirname, 'nonEmptyDir');

  mkdir(testDir, (err) => {
    if (err) throw err;
    console.log(`Directory ${testDir} created!`);

    rmdir(testDir, (err) => {
      if (err) throw err;
      console.log(`Directory ${testDir} deleted!`);
    });
  });
}

{
  const fileName = 'thefile.txt';
  const testDir = path.join(import.meta.dirname, 'hoge');
  const filePath = path.join(testDir, fileName);

  mkdir(testDir, (err) => {
    if (err) throw err;
    console.log(`Directory ${testDir} created!`);

    writeFile(filePath, 'hoge', (err) => {
      if (err) throw err;
      console.log(`File ${fileName} created!`);

      rmdir(testDir, { recursive: true }, (err) => {
        if (err) throw err;
        console.log(`Directory ${testDir} deleted!`);
      });
    });
  });
}
