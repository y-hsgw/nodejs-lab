import { createReadStream, unlink, writeFile } from 'node:fs';
import path from 'node:path';

const fileName = 'thefile.txt';
const filePath = path.join(import.meta.dirname, fileName);

writeFile(
  filePath,
  'Hello, this is a test file!\nSecond line.\nThird line.\n',
  (err) => {
    if (err) throw err;

    const BYTES = 10;
    const stream = createReadStream(filePath, {
      encoding: 'utf8',
      highWaterMark: BYTES,
    });

    console.log('--- HighWaterMark Test Start ---');
    stream.on('data', (chunk) => {
      console.log(`Chunk received (${BYTES} bytes): "${chunk}"`);
    });

    stream.on('end', () => {
      console.log('--- HighWaterMark Test End ---');

      unlink(filePath, (err) => {
        if (err) throw err;
        console.log(`File ${fileName} deleted successfully!`);
      });
    });

    stream.on('error', (err) => {
      console.error('Error reading file:', err);
    });
  },
);
