import { DatabaseSync } from 'node:sqlite';

const sourceDb = new DatabaseSync(':memory:');
const targetDb = new DatabaseSync(':memory:');

sourceDb.exec('CREATE TABLE data(key INTEGER PRIMARY KEY, value TEXT)');
targetDb.exec('CREATE TABLE data(key INTEGER PRIMARY KEY, value TEXT)');

const session = sourceDb.createSession();

const insert = sourceDb.prepare('INSERT INTO data (key, value) VALUES (?, ?)');
insert.run(1, 'hello');
insert.run(2, 'world');

const changeset = session.changeset();
console.log('changeset bytes:', changeset.length);

console.log(
  'target rows:',
  targetDb.prepare('SELECT * FROM data ORDER BY key').all(),
);

const applied = targetDb.applyChangeset(changeset);
console.log('applied:', applied);
console.log(
  'target rows:',
  targetDb.prepare('SELECT * FROM data ORDER BY key').all(),
);
