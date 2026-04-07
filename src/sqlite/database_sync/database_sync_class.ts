import { DatabaseSync } from 'node:sqlite';

const database = new DatabaseSync(':memory:', {
  readOnly: true,
  timeout: 1000,
  readBigInts: true,
  returnArrays: true,
  allowUnknownNamedParameters: true,
});
console.log(database);
