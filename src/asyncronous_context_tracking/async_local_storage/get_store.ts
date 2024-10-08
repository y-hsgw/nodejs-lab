import { AsyncLocalStorage } from 'node:async_hooks';

const asyncLocalStorage = new AsyncLocalStorage();

console.log(asyncLocalStorage.getStore()); // undefined
asyncLocalStorage.run(123, () => {
  console.log(asyncLocalStorage.getStore()); // 123
});
