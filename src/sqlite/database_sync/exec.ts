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

const result = database.prepare(`
  SELECT * FROM users;
`);
console.log(result.get());
