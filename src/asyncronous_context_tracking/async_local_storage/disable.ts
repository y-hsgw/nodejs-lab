import { AsyncLocalStorage } from 'node:async_hooks';

const asyncLocalStorage = new AsyncLocalStorage();

asyncLocalStorage.run(123, () => {
  console.log(asyncLocalStorage.getStore()); // 123

  asyncLocalStorage.disable();
  console.log(asyncLocalStorage.getStore()); // undefined
});
