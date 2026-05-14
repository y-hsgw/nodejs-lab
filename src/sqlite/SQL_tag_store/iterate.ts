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

sql.run`INSERT INTO users (name) VALUES ('Alice')`;
sql.run`INSERT INTO users (name) VALUES ('Bob')`;
sql.run`INSERT INTO users (name) VALUES ('Carol')`;

// iterate を使って 1 行ずつ読む
const minId = 2;

// sql.iterate`... ${minId}` は「イテレータ」を返す
const iterated = sql.iterate`
  SELECT id, name
  FROM users
  WHERE id >= ${minId}
  ORDER BY id
`;

// for-of で 1 件ずつ処理
for (const row of iterated) {
  console.log('row:', row.id, row.name);
}
// 例:
// row: 2 Bob
// row: 3 Carol
