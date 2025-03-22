import { writeFile, unlink, symlink, realpath } from 'node:fs';
import path from 'node:path';

const fileName = 'thefile.txt';
const targetFilePath = path.join(import.meta.dirname, fileName);
const symLinkFileName = 'test-symlink';
const symlinkPath = path.join(import.meta.dirname, symLinkFileName);

writeFile(targetFilePath, 'data to wrote', (err) => {
  if (err) throw err;
  console.log('The "data to wrote" was wrote to file!');

  symlink(targetFilePath, symlinkPath, (err) => {
    if (err) throw err;
    console.log(`The symlink ${symlinkPath} was created!`);

    realpath(
      `./dist/file_system/callback/${symLinkFileName}`,
      (err, resolvedPath) => {
        if (err) throw err;

        console.log(resolvedPath);

        unlink(symlinkPath, (err) => {
          if (err) throw err;
          console.log(`The symlink ${symlinkPath} was deleted!`);

          unlink(targetFilePath, (err) => {
            if (err) throw err;
            console.log(`The file ${targetFilePath} was deleted!`);
          });
        });
      },
    );
  });
});
