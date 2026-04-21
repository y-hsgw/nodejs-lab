import { DatabaseSync } from 'node:sqlite';

const db = new DatabaseSync(':memory:');

const big = 2n ** 54n; // 18014398509481984n

db.exec('CREATE TABLE t (v INTEGER)');
db.prepare('INSERT INTO t (v) VALUES (?)').run(big);
{
  const stmt = db.prepare('SELECT v FROM t'); // readBigInts: false (デフォルト)

  try {
    const row = stmt.get();
    console.log('row:', row);
  } catch (e) {
    console.log('error:', e);
  }
}

{
  // @ts-expect-error
  const stmt = db.prepare('SELECT v FROM t', {
    readBigInts: true,
  });

  try {
    const row = stmt.get();
    console.log('row:', row);
  } catch (e) {
    console.log('error:', e);
  }
}
