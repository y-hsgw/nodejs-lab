import { readdir } from 'fs/promises';

try {
  const direntArray = await readdir('/tmp', {
    withFileTypes: true,
  });
  for await (const dirent of direntArray) {
    if (dirent.isSocket()) {
      console.log(`ソケットファイル: ${dirent.name}`);
    } else {
      console.log(`ソケットファイルではない: ${dirent.name}`);
    }
  }
} catch (err) {
  console.error(err);
}
