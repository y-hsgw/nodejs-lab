import { DatabaseSync } from 'node:sqlite';

const db = new DatabaseSync(':memory:');

// TagStore を作成
const sql = db.createTagStore();

db.exec(`
  CREATE TABLE users (
    id   INTEGER PRIMARY KEY,
    name TEXT
  )
`);

// 1. run でデータを挿入（tagged template）
//    ここではバインド値が無いので、ただの固定 SQL として扱われる
sql.run`INSERT INTO users (id, name) VALUES (1, 'Alice')`;
sql.run`INSERT INTO users (id, name) VALUES (2, 'Bob')`;

// 2. get でパラメータ付き SELECT を実行
//    ${minId} の部分がバインドされ、同じ「SQL 文字列パターン」はキャッシュされる
const minId = 1;
const t1 = performance.now();
const rows1 = sql.get`SELECT * FROM users WHERE id >= ${minId} ORDER BY id`;
const t2 = performance.now();
console.log('rows1:', rows1);
// => [ { id: 1, name: 'Alice' }, { id: 2, name: 'Bob' } ]
console.log('first call ms:', t2 - t1);

const t3 = performance.now();
const rows2 = sql.get`SELECT * FROM users WHERE id >= ${minId} ORDER BY id`;
const t4 = performance.now();
console.log('rows2:', rows2);
console.log('second call ms:', t4 - t3); // 初回より早い速度でレスポンスが来る
