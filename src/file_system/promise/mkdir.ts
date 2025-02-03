import { mkdir, rmdir } from 'node:fs/promises';
import { URL } from 'node:url';

const projectFolder = new URL('./test/project', import.meta.url);
try {
  const createDir = await mkdir(projectFolder, { recursive: true });

  console.log(`created ${createDir}`);
} catch (err) {
  console.error(
    err instanceof Error ? err.message : 'An unexpected error occurred.',
  );
}
