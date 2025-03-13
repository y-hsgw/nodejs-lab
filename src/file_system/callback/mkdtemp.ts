import { mkdtemp, rm } from 'node:fs';
import { join } from 'node:path';

mkdtemp(join(import.meta.dirname, 'foo-'), (err, directory) => {
  if (err) throw err;
  console.log(directory);
  // Prints: /tmp/foo-itXde2 or C:\Users\...\AppData\Local\Temp\foo-itXde2

  rm(directory, { recursive: true }, (err) => {
    if (err) throw err;

    console.log(`Directory ${directory} deleted successfully!`);
  });
});
