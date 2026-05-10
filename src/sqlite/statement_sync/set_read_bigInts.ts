import { DatabaseSync } from 'node:sqlite';

const database = new DatabaseSync(':memory:');

const big = 2n ** 54n; // 18014398509481984n

database.exec(`
  CREATE TABLE bigints(
    id INTEGER PRIMARY KEY,
    value INTEGER
  )
`);

const insert = database.prepare(
  'INSERT INTO bigints (id, value) VALUES (?, ?)',
);
const select = database.prepare('SELECT value FROM bigints WHERE id = ?');

insert.run(1, big);

// デフォルト (setReadBigInts 呼ばない) → number として読もうとしてエラーになる
try {
  const row = select.get(1);
  console.log('default read:', row, typeof row?.value);
} catch (e) {
  console.log('default read error:', e);
}

select.setReadBigInts(true);

const rowBig = select.get(1);
console.log('readBigInts enabled:', rowBig, typeof rowBig?.value);
