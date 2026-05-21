import path from 'node:path';
import { backup, DatabaseSync } from 'node:sqlite';

const sourcePath = path.join(import.meta.dirname, 'source.db');
const backupPath = path.join(import.meta.dirname, 'backup.db');

const sourceDb = new DatabaseSync(sourcePath);

sourceDb.exec(`
  CREATE TABLE IF NOT EXISTS test_tables (
    id    INTEGER PRIMARY KEY,
    name  TEXT,
    data  TEXT
  )
`);

const totalPagesTransferred = await backup(sourceDb, backupPath, {
  rate: 1, // Copy one page at a time.
  progress: ({ totalPages, remainingPages }) => {
    console.log('Backup in progress', { totalPages, remainingPages });
  },
});

console.log('Backup completed', totalPagesTransferred);
