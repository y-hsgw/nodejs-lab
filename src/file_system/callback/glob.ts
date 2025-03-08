import { glob } from 'node:fs';

glob('./dist/**/*.js', (err, matches) => {
  if (err) throw err;
  console.log(matches);
});
