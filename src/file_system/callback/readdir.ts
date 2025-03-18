import { readdir } from 'node:fs';

readdir('./', (err, files) => {
  if (err) throw err;

  console.log('----------default----------');
  for (const file of files) console.log(file);
});

readdir('./', { withFileTypes: true }, (err, files) => {
  if (err) throw err;

  console.log('----------withFileTypes----------');
  for (const file of files) console.log(file);
});

readdir('./', { encoding: 'buffer' }, (err, files) => {
  if (err) throw err;

  console.log('----------buffer----------');
  for (const file of files) console.log(file);
});
