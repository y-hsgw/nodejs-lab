import { DatabaseSync } from 'node:sqlite';

const db = new DatabaseSync(':memory:');
console.log(db.isOpen);

db.close();
console.log(db.isOpen);

db.open();
console.log(db.isOpen);
