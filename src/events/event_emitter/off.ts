import { EventEmitter } from 'node:events';

const emitter = new EventEmitter();

function handler() {
  console.log('イベント発火！');
}

emitter.on('test', handler);

console.log('リスナー数（追加後）:', emitter.listenerCount('test'));

emitter.off('test', handler);

console.log('リスナー数（削除後）:', emitter.listenerCount('test'));
