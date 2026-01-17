import { ReadableStream } from 'node:stream/web';

function makeStream(label: string) {
  return new ReadableStream<string>({
    start(c) {
      c.enqueue('x');
      c.enqueue('y');
      c.enqueue('z');
      // 注意: ここでは close しないことで cancel の挙動を観察しやすくしています
    },
    cancel(reason) {
      console.log(`${label} canceled:`, reason);
    },
  });
}

// a) 既定の for await（breakで早期終了すると cancel が呼ばれる）
const rs1 = makeStream('rs1');
for await (const chunk of rs1) {
  console.log('rs1:', chunk);
  break; // 早期終了 → rs1 canceled が出力される
}

// b) values({ preventCancel: true })（早期終了でも cancel を抑制）
const rs2 = makeStream('rs2');
const it = rs2.values({ preventCancel: true });
for await (const chunk of it) {
  console.log('rs2:', chunk);
  break; // 早期終了しても rs2 canceled は出ない
}
