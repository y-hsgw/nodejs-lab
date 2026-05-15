import { DatabaseSync } from 'node:sqlite';

const db = new DatabaseSync(':memory:');

// SQLTagStore を作成
const sql = db.createTagStore();

// テーブル作成
db.exec(`
  CREATE TABLE users (
    id   INTEGER PRIMARY KEY,
    name TEXT
  )
`);

const insertResult1 = sql.run`INSERT INTO users (name) VALUES ('Alice')`;
console.log(insertResult1);
