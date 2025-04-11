import { readdir } from 'fs/promises';

try {
  const direntArray = await readdir('/dev', {
    withFileTypes: true,
  });
  for await (const dirent of direntArray) {
    if (dirent.isCharacterDevice()) {
      console.log(`キャラクタデバイス: ${dirent.name}`);
    } else {
      console.log(`キャラクタデバイスではない: ${dirent.name}`);
    }
  }
} catch (err) {
  console.error(err);
}
