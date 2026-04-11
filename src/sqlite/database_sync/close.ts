import { DatabaseSync } from 'node:sqlite';

const db = new DatabaseSync(':memory:');
db.close();

// すでに閉じている場合はエラーになる
db.close();
