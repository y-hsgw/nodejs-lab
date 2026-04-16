import { DatabaseSync, constants } from 'node:sqlite';

const db = new DatabaseSync(':memory:');

db.setAuthorizer((actionCode, dbName) => {
  console.log('dbName', dbName);
  console.log({ actionCode });
  if (actionCode === constants.SQLITE_CREATE_TABLE) {
    return constants.SQLITE_DENY;
  }
  return constants.SQLITE_OK;
});

db.prepare('SELECT 1').get();

try {
  db.exec('CREATE TABLE blocked (id INTEGER)');
} catch (err) {
  console.error(err);
}
