import { access, constants, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';

try {
  await access('/etc/passwd', constants.R_OK | constants.W_OK);
  console.log('can access');
} catch {
  console.error('cannot access');
}

const fileName = 'thefile.txt';
const filePath = path.join(import.meta.dirname, fileName);

try {
  await writeFile(filePath, 'hogehoge');
  await access(filePath, constants.R_OK);
  console.log('can access');
} catch {
  console.error('cannot access');
} finally {
  await unlink(filePath);
}
