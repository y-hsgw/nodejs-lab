import { writeFile, unlink, link, stat } from 'node:fs';
import path from 'node:path';

const fileName = 'thefile.txt';
const targetFilePath = path.join(import.meta.dirname, fileName);
const newLinkPath = path.join(import.meta.dirname, 'test-symlink');

writeFile(targetFilePath, 'data to wrote', (err) => {
  if (err) throw err;
  console.log('The "data to wrote" was wrote to file!');

  link(targetFilePath, newLinkPath, (err) => {
    if (err) throw err;
    console.log(`The link ${newLinkPath} was created!`);

    stat(targetFilePath, (err, stats) => {
      if (err) throw err;

      console.log(`Inode of original: ${stats.ino}`);

      stat(newLinkPath, (err, stats) => {
        if (err) throw err;

        console.log(`Inode of hard link: ${stats.ino}`);

        unlink(newLinkPath, (err) => {
          if (err) throw err;
          console.log(`The hard link ${newLinkPath} was deleted!`);

          unlink(targetFilePath, (err) => {
            if (err) throw err;
            console.log(`The file ${targetFilePath} was deleted!`);
          });
        });
      });
    });
  });
});
