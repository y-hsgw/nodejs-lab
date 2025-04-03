import {
  writeFile,
  unwatchFile,
  watchFile,
  type Stats,
  type BigIntStats,
} from 'node:fs';
import path from 'node:path';

{
  const fileName = 'thefile1.txt';
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
    }, 20000);
  });
}

{
  const fileName = 'thefile2.txt';
  const targetFilePath = path.join(import.meta.dirname, fileName);

  writeFile(targetFilePath, 'data to wrote', (err) => {
    if (err) throw err;
    console.log('The "data to wrote" was wrote to file!');

    const listener = (curr: BigIntStats, prev: BigIntStats) => {
      console.log('listener() called');
      console.log('curr: ', curr);
      console.log('prev: ', prev);
    };

    watchFile(targetFilePath, { bigint: true }, listener);

    setTimeout(() => {
      unwatchFile(targetFilePath, listener);
      console.log('unwatchFileで監視を解除');
    }, 20000);
  });
}
