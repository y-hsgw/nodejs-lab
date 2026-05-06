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
const select = database.prepare('SELECT * FROM users WHERE id = :id');

{
  const inserted = insert.run({ id: 1, name: 'Alice' });
  console.log('insert #1:', inserted);

  const row = select.get({ id: 1 });
  console.log('row #1:', row);
}

{
  insert.setAllowBareNamedParameters(false);
  const inserted = insert.run({ ':id': 2, ':name': 'Bob' });
  console.log('insert #2:', inserted);

  select.setAllowBareNamedParameters(false);
  const row = select.get({ ':id': 1 });
  console.log('row #2:', row);
}
