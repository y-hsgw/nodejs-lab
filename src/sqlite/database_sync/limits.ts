import { DatabaseSync } from 'node:sqlite';

const db = new DatabaseSync(':memory:');

// @ts-expect-error
console.log(db.limits);

// @ts-expect-error
db.limits.sqlLength = 100000;

// @ts-expect-error
db.limits.sqlLength = Infinity;
