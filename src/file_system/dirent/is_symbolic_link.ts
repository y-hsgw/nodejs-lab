import { readdir } from 'fs/promises';

try {
  const direntArray = await readdir('/', {
    withFileTypes: true,
  });
  for await (const dirent of direntArray) {
    if (dirent.isSymbolicLink()) {
      console.log(`シンボリックリンク: ${dirent.name}`);
    } else {
      console.log(`シンボリックリンクではない: ${dirent.name}`);
    }
  }
} catch (err) {
  console.error(err);
}
