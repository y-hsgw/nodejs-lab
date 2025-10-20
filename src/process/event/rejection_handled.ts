import process from 'node:process';

const unhandledRejections = new Map();
process.on('unhandledRejection', (reason, promise) => {
  console.log('[unhandledRejection]', reason);

  unhandledRejections.set(promise, reason);
});
process.on('rejectionHandled', (promise) => {
  unhandledRejections.delete(promise);
  console.log('promise', promise);
  console.log('[rejectionHandled] Promise が後からハンドルされた');
});

const p = Promise.reject(new Error('一度 unhandled になるエラー'));

// 少し遅れて catch を追加
setTimeout(() => {
  p.catch((err) => console.log('[catch] 捕捉:', err.message));
}, 100);
