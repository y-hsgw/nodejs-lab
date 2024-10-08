import { AsyncLocalStorage } from 'node:async_hooks';

const asyncLocalStorage = new AsyncLocalStorage<Map<string, string>>();

const foo = async () => {
  console.log(asyncLocalStorage.getStore()?.get('key'));
};

const value = 'value';

async function fn() {
  // runのコールバック関数とfoo関数内でgetStore()の呼び出し可能
  await asyncLocalStorage.run(new Map<string, string>(), () => {
    asyncLocalStorage.getStore()?.set('key', value);
    return foo(); // The return value of foo will be awaited
  });
}

fn();
