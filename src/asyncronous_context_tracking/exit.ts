import { AsyncLocalStorage } from 'node:async_hooks';

const asyncLocalStorage = new AsyncLocalStorage();

asyncLocalStorage.run(123, () => {
  try {
    console.log('1', asyncLocalStorage.getStore()); // Returns 123
    // exitのコールバック関数内ではgetStore()の呼び出しは常にundefinedを返す
    asyncLocalStorage.exit(() => {
      console.log('2', asyncLocalStorage.getStore()); // Returns undefined
      throw new Error();
    });
  } catch (e) {
    console.log('3', asyncLocalStorage.getStore()); // Returns 123
  }
});
