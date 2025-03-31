import { writeFile, unwatchFile, watchFile, Stats } from 'node:fs';
import path from 'node:path';

const fileName = 'thefile.txt';
const targetFilePath = path.join(import.meta.dirname, fileName);

writeFile(targetFilePath, 'data to wrote', (err) => {
  if (err) throw err;
  console.log('The "data to wrote" was wrote to file!');

  const listener = (curr: Stats, prev: Stats) => {
    console.log('listener() called');
    console.log('curr: ', curr);
    console.log('prev: ', prev);
  };

  watchFile(targetFilePath, listener);

  setTimeout(() => {
    unwatchFile(targetFilePath, listener);
    console.log('unwatchFileで監視を解除');
  }, 10000);
});
