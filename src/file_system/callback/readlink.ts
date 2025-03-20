import { readlink, symlink, unlink, writeFile } from 'node:fs';
import path from 'node:path';

const targetFile = path.join(import.meta.dirname, 'target.txt');
const symlinkPath = path.join(import.meta.dirname, 'test-symlink');

writeFile(targetFile, 'Hello, world!', (err) => {
  if (err) throw err;

  symlink(targetFile, symlinkPath, (err) => {
    if (err) throw err;

    readlink(symlinkPath, (err, linkString) => {
      if (err) throw err;

      console.log(linkString);

      unlink(symlinkPath, (err) => {
        if (err) throw err;
      });

      unlink(targetFile, (err) => {
        if (err) throw err;
      });
    });
  });
});
