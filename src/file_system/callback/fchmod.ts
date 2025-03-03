import {
  appendFile,
  close,
  constants,
  fchmod,
  open,
  stat,
  unlink,
} from 'node:fs';
import path from 'node:path';

const fileName = 'thefile.txt';
const filePath = path.join(import.meta.dirname, fileName);

appendFile(filePath, 'data to append', (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');

  stat(filePath, (err, stats) => {
    console.log(stats.mode);
  });

  open(filePath, 'r', (err, fd) => {
    if (err) throw err;

    console.log(`File ${fileName} opened successfully!`);

    fchmod(fd, constants.S_IRUSR, (err) => {
      if (err) throw err;
      console.log(`The permissions for file ${fileName} have been changed!`);

      stat(filePath, (err, stats) => {
        console.log(stats.mode);
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
});
