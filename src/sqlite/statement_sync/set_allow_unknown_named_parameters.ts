import { DatabaseSync } from 'node:sqlite';

const database = new DatabaseSync(':memory:');
database.exec(`
  CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL
  );
`);

const insert = database.prepare(
  'INSERT INTO users (id, name) VALUES (:id, :name)',
);
insert.run({ id: 1, name: 'Alice' });

const select = database.prepare('SELECT * FROM users WHERE id = :id');

select.setAllowUnknownNamedParameters(true);
const row = select.get({
  id: 2,
  // 未知の名前が検出されてもエラーにならない
  hoge: 'foo',
});
console.log('row #2:', row);
