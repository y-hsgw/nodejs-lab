import { DatabaseSync } from 'node:sqlite';

const database = new DatabaseSync(':memory:');

const session = database.createSession();

console.log(session);
