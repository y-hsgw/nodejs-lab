import { close, ftruncate, open, readFile, writeFile } from 'node:fs';
import path from 'node:path';

const fileName = 'thefile.txt';
const filePath = path.join(import.meta.dirname, fileName);

writeFile(filePath, 'Hello, Node.js!', (err) => {
  if (err) throw err;

  open(filePath, 'r+', (err, fd) => {
    if (err) throw err;

    console.log(`File ${fileName} opened successfully!`);

    ftruncate(fd, 5, (err) => {
      if (err) throw err;

      readFile(filePath, { encoding: 'utf-8' }, (err, data) => {
        if (err) throw err;
        // Hello だけが残る
        console.log(`File content: ${data}`);

        close(fd, (err) => {
          if (err) throw err;
          console.log(`File ${fileName} closed successfully!`);
        });
      });
    });
  });
});
