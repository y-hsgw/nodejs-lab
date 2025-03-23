import { rename, stat, unlink, writeFile } from 'node:fs';
import path from 'node:path';

const createPath = (fileName: string) =>
  path.join(import.meta.dirname, fileName);

const fileName = 'thefile.txt';
const filePath = createPath(fileName);

writeFile(filePath, 'data to wrote', (err) => {
  if (err) throw err;

  const newName = 'newFile.txt';
  const newPath = createPath(newName);
  rename(filePath, newPath, (err) => {
    if (err) throw err;
    console.log('Rename complete!');

    stat(newPath, (err, stats) => {
      if (err) throw err;

      console.log(`renamed file stats: ${JSON.stringify(stats)}`);
    });

    unlink(newPath, (err) => {
      if (err) throw err;

      console.log(`The file ${newPath} was deleted!`);
    });
  });
});
