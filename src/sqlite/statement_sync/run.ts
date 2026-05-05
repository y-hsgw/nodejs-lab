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

{
  const statementSync = database.prepare(`
    SELECT id, name FROM users
  `);

  console.log(statementSync.run());
}

{
  const insert = database.prepare('INSERT INTO users (name) VALUES (?)');

  console.log(insert.run('Taro'));
}
