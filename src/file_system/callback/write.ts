import { open, readFile, rm, write, writeFile } from 'node:fs';
import path from 'node:path';

{
  const fileName = 'thefile1.txt';
  const filePath = path.join(import.meta.dirname, fileName);

  writeFile(filePath, 'Hello, this is a sample text file.', (err) => {
    if (err) throw err;

    open(filePath, 'a', (err, fd) => {
      if (err) throw err;

      write(fd, 'Good ', 0, 'ascii', (err, written, str) => {
        if (err) throw err;

        console.log('written', written);
        console.log('str', str);

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

      write(fd, Buffer.alloc(10, 'a'), (err, written, buffer) => {
        if (err) throw err;

        console.log('written', written);
        console.log('buffer', buffer);

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
