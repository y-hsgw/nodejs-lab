import { mkdir, rm, watch, writeFile } from 'node:fs';
import path from 'node:path';

const newDir = path.join(import.meta.dirname, '/test');
mkdir(newDir, (err) => {
  if (err) throw err;

  const newFile = path.join(newDir, 'thefile.txt');
  writeFile(newFile, 'hoge', (err) => {
    if (err) throw err;

    const watcher = watch(newDir, (eventType, filename) => {
      console.log(`event type is: ${eventType}`);
      if (filename) {
        console.log(`filename provided: ${filename}`);
      } else {
        console.log('filename not provided');
      }
    });

    setTimeout(() => {
      watcher.close();
      console.log('監視を終了しました');

      rm(newDir, { recursive: true }, (err) => {
        if (err) throw err;
      });
    }, 10000);
  });
});
