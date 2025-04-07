import { opendir } from 'node:fs/promises';

try {
  const dir = await opendir('./');
  console.log(dir.path);
  await dir.close();
} catch (err) {
  console.error(err);
}
