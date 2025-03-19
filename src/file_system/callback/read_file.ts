import { readFile } from 'node:fs';

readFile(import.meta.filename, { encoding: 'utf-8' }, (err, data) => {
  if (err) throw err;
  console.log(data);
});
