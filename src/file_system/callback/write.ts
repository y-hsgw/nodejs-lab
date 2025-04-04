import { open, readFile, rm, write, writeFile } from 'node:fs';
import path from 'node:path';

{
  const fileName = 'thefile1.txt';
  const filePath = path.join(import.meta.dirname, fileName);

  writeFile(filePath, 'Hello, this is a sample text file.', (err) => {
    if (err) throw err;

    open(filePath, 'a', (err, fd) => {
      if (err) throw err;

      write(fd, 'Good ', 0, 'ascii', (err) => {
        if (err) throw err;

        readFile(filePath, { encoding: 'utf8' }, (err, data) => {
          if (err) throw err;
          console.log(data);

          rm(filePath, (err) => {
            if (err) throw err;
            console.log(`The file ${filePath} was deleted!`);
          });
        });
      });
    });
  });
}

{
  const fileName = 'thefile2.txt';
  const filePath = path.join(import.meta.dirname, fileName);

  writeFile(filePath, 'Hello, this is a sample text file.', (err) => {
    if (err) throw err;

    open(filePath, 'a', (err, fd) => {
      if (err) throw err;

      write(fd, Buffer.alloc(10, 'a'), (err) => {
        if (err) throw err;

        readFile(filePath, { encoding: 'utf8' }, (err, data) => {
          if (err) throw err;
          console.log(data);

          rm(filePath, (err) => {
            if (err) throw err;
            console.log(`The file ${filePath} was deleted!`);
          });
        });
      });
    });
  });
}
