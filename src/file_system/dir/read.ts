import { opendir } from 'node:fs/promises';

try {
  const dir = await opendir(import.meta.dirname);
  const dirent = await dir.read();
  console.log(dirent);
  await dir.close();
} catch (err) {
  console.error(err);
}
