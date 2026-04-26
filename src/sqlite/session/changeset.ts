import { DatabaseSync } from 'node:sqlite';

const database = new DatabaseSync(':memory:');

database.exec('CREATE TABLE data(key INTEGER PRIMARY KEY, value TEXT)');

const session = database.createSession();

const insert = database.prepare('INSERT INTO data (key, value) VALUES (?, ?)');
insert.run(1, 'hello');

const changeset = session.changeset();
console.log('changeset:', changeset);
