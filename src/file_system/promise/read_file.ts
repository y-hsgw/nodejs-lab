import { readFile } from 'node:fs/promises';
try {
  const filePath = new URL('./read_file.js', import.meta.url);
  const contents = await readFile(filePath, { encoding: 'utf8' });
  console.log(contents);
} catch (err) {
  console.error(err);
}
