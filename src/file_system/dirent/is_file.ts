import { readdir } from 'fs/promises';

try {
  const direntArray = await readdir('./', {
    withFileTypes: true,
  });
  for await (const dirent of direntArray) {
    if (dirent.isFile()) {
      console.log(`ファイル: ${dirent.name}`);
    } else {
      console.log(`ファイルではない: ${dirent.name}`);
    }
  }
} catch (err) {
  console.error(err);
}
