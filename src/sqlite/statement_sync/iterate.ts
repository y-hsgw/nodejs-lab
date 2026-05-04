import { DatabaseSync } from 'node:sqlite';

const database = new DatabaseSync(':memory:');
database.exec(`
  CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL
  );
`);

database.exec(`
  INSERT INTO users (name) VALUES ('Alice'), ('Bob'), ('Charlie');
`);

const statementSync = database.prepare(
  'SELECT * FROM users WHERE id > ? ORDER BY id',
);

for (const row of statementSync.iterate(0)) {
  console.log(row);
}
