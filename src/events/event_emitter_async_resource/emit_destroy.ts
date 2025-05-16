import { createHook } from 'node:async_hooks';
import { EventEmitterAsyncResource } from 'node:events';

// destroyフックを監視する
const hook = createHook({
  destroy(asyncId) {
    console.log(`🔥 destroy hook called for asyncId: ${asyncId}`);
  },
});

hook.enable(); // フックを有効にする

// リソースを作る
const emitter = new EventEmitterAsyncResource({ name: 'test' });

console.log('作成された asyncId:', emitter.asyncId);

// emitDestroyを呼ぶ（destroy フックが走る）
emitter.emitDestroy();
