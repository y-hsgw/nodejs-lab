import { AsyncLocalStorage } from 'node:async_hooks';

const asyncLocalStorage = new AsyncLocalStorage();

const store = { id: 2 };

try {
  asyncLocalStorage.run(store, () => {
    console.log('1', asyncLocalStorage.getStore()); // Returns the store object
    setTimeout(() => {
      console.log('2', asyncLocalStorage.getStore()); // Returns the store object
    }, 200);

    // エラースローした場合は、runメソッドも同じエラーをスローするようになっている
    throw new Error();
  });
} catch {
  console.log('3', asyncLocalStorage.getStore()); // Returns undefined
}
