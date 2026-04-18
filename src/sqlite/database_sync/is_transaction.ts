import { DatabaseSync } from 'node:sqlite';

const db = new DatabaseSync(':memory:');

console.log('start:', db.isTransaction); // false

db.exec('BEGIN');
console.log('after BEGIN:', db.isTransaction); // true

db.exec('COMMIT');

console.log('after COMMIT:', db.isTransaction); // false
