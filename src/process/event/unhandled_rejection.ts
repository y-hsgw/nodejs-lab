import process from 'node:process';

process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at:', promise, 'reason:', reason);
  // Application specific logging, throwing an error, or other logic here
});

Promise.resolve().then((res) => {
  // @ts-expect-error
  return JSON.pasre(res); // parse とタイポしている
}); // catch() や then'() がないため、unhandledRejection イベントが発生する
