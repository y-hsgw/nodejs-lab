import { writeFile, unlink, symlink, lutimes, lstat } from 'node:fs';
import path from 'node:path';

const fileName = 'thefile.txt';
const targetFilePath = path.join(import.meta.dirname, fileName);
const symlinkPath = path.join(import.meta.dirname, 'test-symlink');

writeFile(targetFilePath, 'data to wrote', (err) => {
  if (err) throw err;
  console.log('The "data to wrote" was wrote to file!');

  symlink(targetFilePath, symlinkPath, (err) => {
    if (err) throw err;
    console.log(`The symlink ${symlinkPath} was created!`);

    lstat(symlinkPath, (err, stats) => {
      if (err) throw err;

      console.log(
        'Before lutimes - atime:',
        stats.atime,
        'mtime:',
        stats.mtime,
      );
    });

    const newAtime = new Date('2024-01-01T12:00:00Z');
    const newMtime = new Date('2024-01-02T12:00:00Z');
    lutimes(symlinkPath, newAtime, newMtime, (err) => {
      if (err) throw err;
      console.log(`The symlink ${symlinkPath} was updated!`);

      lstat(symlinkPath, (err, stats) => {
        if (err) throw err;

        console.log(
          'After lutimes - atime:',
          stats.atime,
          'mtime:',
          stats.mtime,
        );

        unlink(symlinkPath, (err) => {
          if (err) throw err;
          console.log(`The symlink ${symlinkPath} was deleted!`);

          unlink(targetFilePath, (err) => {
            if (err) throw err;
            console.log(`The file ${targetFilePath} was deleted!`);
          });
        });
      });
    });
  });
});
