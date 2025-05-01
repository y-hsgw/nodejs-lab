import { EventEmitter } from 'node:events';

const eventEmitter = new EventEmitter();

// デフォルトで10個のリスナーを登録できる
// それ以上登録しようとすると、Warningが出る
Array.from({ length: 10 }).forEach(() => {
  eventEmitter.on('foo', function callback() {
    console.log('foo event triggered');
  });
});

eventEmitter.setMaxListeners(11);
Array.from({ length: 10 }).forEach(() => {
  eventEmitter.on('foo', function callback() {
    console.log('foo event triggered');
  });
});
