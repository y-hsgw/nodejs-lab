import { mkdtemp } from 'node:fs/promises';
import { join } from 'node:path';

try {
  const dir = await mkdtemp(join(import.meta.dirname, 'foo-'));
  console.log(dir);
} catch (err) {
  console.error(err);
}
