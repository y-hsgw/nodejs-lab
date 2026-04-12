import { DatabaseSync } from 'node:sqlite';

// Test 1: defensive=true での破損操作テスト
console.log('=== Test 1: defensive=true での破損操作 ===');
const database = new DatabaseSync(':memory:');
database.exec(`CREATE TABLE t(x INTEGER); INSERT INTO t VALUES (1), (2), (3);`);

database.enableDefensive(true);

try {
  database.exec(`
    PRAGMA writable_schema = ON;
    DELETE FROM sqlite_master WHERE type='table';
    PRAGMA integrity_check;
  `);
  console.log('✓ 複合破損操作：成功してしまった');
} catch (e) {
  console.log('✗ 複合破損操作：エラー -', (e as Error).message);
}

// Test 2: defensive=false での破損操作テスト
console.log('\n=== Test 2: defensive=false での破損操作 ===');

database.enableDefensive(false);

try {
  database.exec(`
    PRAGMA writable_schema = ON;
    DELETE FROM sqlite_master WHERE type='table';
    PRAGMA integrity_check;
  `);
  console.log('✓ 複合破損操作：成功');
} catch (e) {
  console.log('✗ 複合破損操作：エラー -', (e as Error).message);
}

// Test 3: PRAGMA writable_schema = OFF で復旧
console.log('\n=== Test 3: writable_schema=OFF で復旧 ===');

database.enableDefensive(false);

try {
  database.exec(`PRAGMA writable_schema = ON;`);
  database.exec(`DELETE FROM sqlite_master WHERE type='table';`);
  database.exec(`PRAGMA writable_schema = OFF;`);
  database.exec(`PRAGMA integrity_check;`);
  console.log('✓ 破損・復旧操作：成功');
} catch (e) {
  console.log('✗ 破損・復旧操作：エラー -', (e as Error).message);
}
