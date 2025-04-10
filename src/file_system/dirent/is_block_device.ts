import { readdir } from 'fs/promises';

try {
  const direntArray = await readdir(import.meta.dirname, {
    withFileTypes: true,
  });
  for await (const dirent of direntArray) {
    if (dirent.isBlockDevice()) {
      console.log(`ブロックデバイス: ${dirent.name}`);
    } else {
      console.log(`ブロックデバイスではない: ${dirent.name}`);
    }
  }
} catch (err) {
  console.error(err);
}
