import { createWriteStream, readFile, unlink } from 'node:fs';
import path from 'node:path';

const fileName = 'thefile.txt';
const filePath = path.join(import.meta.dirname, fileName);

const stream = createWriteStream(filePath, { encoding: 'utf-8' });

stream.write('Hello World!');

stream.end('Goodbye!\n');

stream.on('finish', () => {
  console.log('Stream ended');

  readFile(filePath, { encoding: 'utf-8' }, (err, data) => {
    if (err) throw err;
    console.log(`File content: ${data}`);

    unlink(filePath, (err) => {
      if (err) throw err;
      console.log(`File ${fileName} deleted successfully!`);
    });
  });
});

stream.on('error', (err) => {
  console.error('Error writing to file:', err);
});
