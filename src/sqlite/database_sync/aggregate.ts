import { DatabaseSync } from 'node:sqlite';

const db = new DatabaseSync(':memory:');
db.exec(`
  CREATE TABLE t3(x TEXT NOT NULL, y INTEGER NOT NULL);
  INSERT INTO t3 VALUES ('a', 4),
                        ('b', 5),
                        ('c', 3),
                        ('d', 8),
                        ('e', 1);
`);

db.aggregate('sumint', {
  start: 0,
  step: (acc, value) => {
    console.log(`acc: ${acc}, value: ${value}`);
    // @ts-expect-error
    return acc + value;
  },
});

console.log(db.prepare('SELECT sumint(x) as total FROM t3').get()); // { total: 21 }
console.log(db.prepare('SELECT sumint(y) as total FROM t3').get()); // { total: 21 }
