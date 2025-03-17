import { close, constants, open, read, unlink, writeFile } from 'node:fs';
import path from 'node:path';

const fileName = 'thefile.txt';
const filePath = path.join(import.meta.dirname, fileName);

writeFile(filePath, 'hoge', (err) => {
  if (err) throw err;

  open(filePath, 'r', constants.O_WRONLY, (err, fd) => {
    if (err) throw err;

    console.log(`File ${fileName} opened successfully!`);

    read(fd, (err, bytesRead, buffer) => {
      if (err) throw err;

      console.log('bytesRead', bytesRead);
      console.log('buffer', buffer);
      console.log('buffer', `${buffer}`);
    });

    close(fd, (err) => {
      if (err) throw err;
      console.log(`File ${fileName} closed successfully!`);

      unlink(filePath, (err) => {
        if (err) throw err;
        console.log(`File ${fileName} deleted successfully!`);
      });
    });
  });
});
