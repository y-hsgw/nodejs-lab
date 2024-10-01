import { AsyncLocalStorage } from 'node:async_hooks';

const asyncLocalStorage = new AsyncLocalStorage();
const runInAsyncScope = asyncLocalStorage.run(123, () =>
  AsyncLocalStorage.snapshot(),
);
// 別のコンテキスト 321 の中で runInAsyncScope を実行することにより、
// キャプチャされたコンテキスト（123）内で関数が実行され、最終的にその値が返される。
const result = asyncLocalStorage.run(321, () =>
  runInAsyncScope(() => asyncLocalStorage.getStore()),
);
console.log(result); // returns 123

class Foo {
  #runInAsyncScope = AsyncLocalStorage.snapshot();

  get() {
    return this.#runInAsyncScope(() => asyncLocalStorage.getStore());
  }
}

const foo = asyncLocalStorage.run(456, () => new Foo());
console.log(asyncLocalStorage.run(321, () => foo.get())); // returns 456

asyncLocalStorage.run(123, () => {
  console.log(asyncLocalStorage.getStore()); // returns 123
  console.log(foo.get()); // returns 456
});
