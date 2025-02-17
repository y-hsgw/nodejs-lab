import { symlink, stat, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';

const targetFile = path.join(import.meta.dirname, 'target.txt');
const symlinkPath = path.join(import.meta.dirname, 'test-symlink');

try {
  await writeFile(targetFile, 'Hello, world!');
  await symlink(targetFile, symlinkPath);
  const stats = await stat(symlinkPath);
  console.log(stats);
} catch (error) {
  console.error('Error:', error);
} finally {
  await unlink(symlinkPath);
  await unlink(targetFile);
}
