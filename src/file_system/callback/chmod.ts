import { appendFile, chmod, constants, stat, unlink } from 'node:fs';
import path from 'node:path';

const fileName = 'thefile.txt';
const filePath = path.join(import.meta.dirname, fileName);

appendFile(filePath, 'data to append', (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');

  stat(filePath, (err, stats) => {
    console.log(stats.mode);
  });

  chmod(filePath, constants.S_IRUSR, (err) => {
    if (err) throw err;
    console.log(`The permissions for file ${fileName} have been changed!`);

    stat(filePath, (err, stats) => {
      console.log(stats.mode);
    });

    unlink(filePath, (err) => {
      if (err) throw err;
      console.log(`The file ${fileName} has been deleted successfully!`);
    });
  });
});
