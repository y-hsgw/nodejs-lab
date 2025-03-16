import { opendir } from 'node:fs';

opendir(import.meta.dirname, async (err, dir) => {
  if (err) throw err;

  for await (const dirent of dir) console.log(dirent);
});
