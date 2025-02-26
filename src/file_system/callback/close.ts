import { close, open, unlink, writeFile } from 'node:fs';
import path from 'node:path';

const fileName = 'thefile.txt';
const filePath = path.join(import.meta.dirname, fileName);

writeFile(filePath, 'hoge', (err) => {
  if (err) throw err;

  open(filePath, 'r', (err, fd) => {
    if (err) throw err;

    console.log(`File ${fileName} opened successfully!`);

    // Close the opened file
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
