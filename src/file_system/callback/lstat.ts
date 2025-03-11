import { writeFile, unlink, stat, symlink, lstat } from 'node:fs';
import path from 'node:path';

const fileName = 'thefile.txt';
const targetFilePath = path.join(import.meta.dirname, fileName);
const symlinkFilePath = path.join(import.meta.dirname, 'test-symlink');

writeFile(targetFilePath, 'data to wrote', (err) => {
  if (err) throw err;
  console.log('The "data to wrote" was wrote to file!');

  symlink(targetFilePath, symlinkFilePath, (err) => {
    if (err) throw err;
    console.log(`The symlink ${symlinkFilePath} was created!`);
    stat(targetFilePath, (err, stats) => {
      if (err) throw err;
      console.log(`origin: ${stats.ino}`);

      stat(symlinkFilePath, (err, stats) => {
        if (err) throw err;

        console.log(`stat: ${stats.ino}`);

        lstat(symlinkFilePath, (err, stats) => {
          if (err) throw err;

          console.log(`lstat: ${stats.ino}`);

          unlink(symlinkFilePath, (err) => {
            if (err) throw err;
            console.log(`The symlink ${symlinkFilePath} was deleted!`);

            unlink(targetFilePath, (err) => {
              if (err) throw err;
              console.log(`The file ${targetFilePath} was deleted!`);
            });
          });
        });
      });
    });
  });
});
