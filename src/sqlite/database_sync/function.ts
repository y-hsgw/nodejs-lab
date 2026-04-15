import { DatabaseSync } from 'node:sqlite';

const db = new DatabaseSync(':memory:');

// テーブル作成 & データ投入
db.exec(`
  CREATE TABLE users(
    id   INTEGER PRIMARY KEY,
    name TEXT NOT NULL
  );
  INSERT INTO users (name) VALUES ('alice'), ('Bob'), ('cHaRlie');
`);

// SQLite の関数 my_upper を JS で定義
db.function('my_upper', (value) => {
  if (value == null || typeof value !== 'string') return null;
  return value.toUpperCase();
});

// SQL から my_upper(name) を呼んでみる
const statement = db.prepare(
  'SELECT id, name, my_upper(name) AS upper_name FROM users ORDER BY id',
);
const rows = statement.all();
console.log(rows);
