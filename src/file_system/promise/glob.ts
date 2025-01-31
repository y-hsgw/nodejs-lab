import { glob } from 'node:fs/promises';

for await (const entry of glob('**/*.js')) console.log(entry);

console.log('-------------------');

for await (const entry of glob('**/*.js', {
  exclude: (filename) => filename.startsWith('dist'),
}))
  console.log(entry);
