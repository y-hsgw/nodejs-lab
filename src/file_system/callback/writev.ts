import { open, readFile, rm, writeFile, writev } from 'node:fs';
import path from 'node:path';

const fileName = 'thefile2.txt';
const filePath = path.join(import.meta.dirname, fileName);

writeFile(filePath, 'Hello, this is a sample text file.', (err) => {
  if (err) throw err;

  open(filePath, 'a', (err, fd) => {
    if (err) throw err;

    const buffers = [
      Buffer.from('Hello, '),
      Buffer.from('this is '),
      Buffer.from('writev!'),
    ];

    writev(fd, buffers, (err, bytesWritten, buffers) => {
      if (err) throw err;

      console.log('bytesWritten', bytesWritten);
      console.log('buffers', buffers);

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
