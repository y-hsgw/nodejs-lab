import { access, mkdir, rm } from 'node:fs';
import path from 'node:path';

const dirName = 'test';
const dirPath = path.join(import.meta.dirname, dirName);

mkdir(dirPath, { recursive: true }, (err, path) => {
  if (err) throw err;
  console.log(`Directory ${path} created successfully!`);

  access(dirPath, (err) => {
    if (err) throw err;
    console.log(`access ${dirPath}`);

    rm(dirPath, { recursive: true }, (err) => {
      if (err) throw err;

      console.log(`Directory ${dirPath} deleted successfully!`);
    });
  });
});
