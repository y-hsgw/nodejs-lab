import { readdir } from 'fs/promises';

try {
  const direntArray = await readdir('./', {
    withFileTypes: true,
  });
  for await (const dirent of direntArray) {
    if (dirent.isDirectory()) {
      console.log(`ディレクトリ: ${dirent.name}`);
    } else {
      console.log(`ディレクトリではない: ${dirent.name}`);
    }
  }
} catch (err) {
  console.error(err);
}
