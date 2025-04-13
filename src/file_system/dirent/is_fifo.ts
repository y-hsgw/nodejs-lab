import { readdir } from 'fs/promises';

try {
  const direntArray = await readdir('./', {
    withFileTypes: true,
  });
  for await (const dirent of direntArray) {
    if (dirent.isFIFO()) {
      console.log(`FIFO pipe: ${dirent.name}`);
    } else {
      console.log(`FIFO pipeではない: ${dirent.name}`);
    }
  }
} catch (err) {
  console.error(err);
}
