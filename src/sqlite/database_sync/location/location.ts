import path from 'node:path';
import { DatabaseSync } from 'node:sqlite';

const filePath = path.join(import.meta.dirname, 'my.db');

const db = new DatabaseSync(filePath);
console.log(db.location('main'));

db.exec(`
  ATTACH DATABASE '${import.meta.dirname}/sub.db' AS sub;
`);
console.log(db.location('sub'));
console.log(db.location('hoge'));
