import { MessageChannel } from 'node:worker_threads';

{
  const { port1, port2 } = new MessageChannel();

  port1.on('message', (msg) => console.log('📩 受信:', msg.secret));

  const obj = {};
  Object.defineProperty(obj, 'secret', {
    value: 123,
    enumerable: false,
  });
  // @ts-expect-error
  console.log('🚀 送信前:', obj.secret);
  port2.postMessage(obj);

  port2.close();
}

{
  const b = Symbol('b');

  class Foo {
    #a = 1;
    c: number;
    constructor() {
      // @ts-expect-error
      this[b] = 2;
      this.c = 3;
    }

    get d() {
      return 4;
    }
  }

  const { port1, port2 } = new MessageChannel();

  port1.on('message', (message) => console.log(message));

  port2.postMessage(new Foo());
  // Prints: { c: 3 }
  port2.close();
}
