import { DatabaseSync } from 'node:sqlite';

const db = new DatabaseSync(':memory:');

const sql = db.createTagStore();

console.log(sql.db);
