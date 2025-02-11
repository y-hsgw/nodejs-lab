import { realpath } from 'node:fs/promises';
try {
  const path = await realpath('./');
  console.log(path);
} catch (err) {
  console.error(err);
}
