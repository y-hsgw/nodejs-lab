import { close, futimes, open, stat, unlink, writeFile } from 'node:fs';
import path from 'node:path';

const fileName = 'thefile.txt';
const filePath = path.join(import.meta.dirname, fileName);

writeFile(filePath, 'Hello, Node.js!', (err) => {
  if (err) throw err;

  open(filePath, 'r+', (err, fd) => {
    if (err) throw err;

    console.log(`File ${fileName} opened successfully!`);

    stat(filePath, async (err, stats) => {
      if (err) throw err;

      console.log('before', stats.atime, stats.mtime);
    });

    const now = new Date();
    const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);
    futimes(fd, oneHourAgo, now, (err) => {
      if (err) throw err;

      stat(filePath, async (err, stats) => {
        if (err) throw err;

        console.log('after', stats.atime, stats.mtime);

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
  });
});
