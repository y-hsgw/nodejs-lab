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
    SELECT * FROM users
  `);
  console.log(statementSync.all());
}

{
  const statementSync = database.prepare(
    'SELECT * FROM users WHERE id > ? ORDER BY id',
  );
  console.log(statementSync.all(2));
}

{
  const statementSync = database.prepare(`
    SELECT * FROM users
    WHERE id BETWEEN :minId AND :maxId
    ORDER BY id
  `);
  console.log(statementSync.all({ minId: 1, maxId: 2 }));
}
