import { DatabaseSync } from 'node:sqlite';

const database = new DatabaseSync(':memory:');
database.exec('CREATE TABLE users (id INT, name TEXT)');

const store = database.createTagStore();
store.run`INSERT INTO users VALUES (1, 'Alice')`;

console.log(store);
console.log(store.size);
