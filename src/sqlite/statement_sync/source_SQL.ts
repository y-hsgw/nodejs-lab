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
console.log(insert.sourceSQL);
