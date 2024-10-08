import http from 'node:http';
import { AsyncLocalStorage } from 'node:async_hooks';

const asyncLocalStorage = new AsyncLocalStorage();

function logWithId(msg: string) {
  const id = asyncLocalStorage.getStore();
  console.log(`${id !== undefined ? id : '-'}:`, msg);
}

let idSeq = 0;
http
  .createServer((req, res) => {
    asyncLocalStorage.run(idSeq++, () => {
      logWithId('start');
      // Imagine any chain of async operations here
      setImmediate(() => {
        logWithId('finish');
        res.end();
      });
    });
  })
  .listen(8080);

// getリクエストごとに独立したストレージコンテキストを維持している。
// 1つ目と2つ目のリクエストでストレージは互いに干渉していない。
http.get('http://localhost:8080');
http.get('http://localhost:8080');
// Prints:
//   0: start
//   1: start
//   0: finish
//   1: finish
