import { writeFile, unlink, access } from 'node:fs';
import path from 'node:path';

const fileName = 'thefile.txt';
const targetFilePath = path.join(import.meta.dirname, fileName);

writeFile(targetFilePath, 'data to wrote', (err) => {
  if (err) throw err;
  console.log('The "data to wrote" was wrote to file!');

  unlink(targetFilePath, (err) => {
    if (err) throw err;

    console.log(`The file ${targetFilePath} was deleted!`);

    access(targetFilePath, (err) => {
      if (err) {
        console.log(`The file ${targetFilePath} does not exist!`);
      } else {
        console.log(`The file ${targetFilePath} exists!`);
      }
    });
  });
});
