import { CountQueuingStrategy, WritableStream } from 'node:stream/web';
import { setTimeout } from 'node:timers/promises';

const writableStream = new WritableStream(
  {
    async write(chunk) {
      console.log('chunk:', chunk);
      await setTimeout(5000); // わざと遅くする
    },
  },
  new CountQueuingStrategy({ highWaterMark: 2 }), // 4チャンクまで
);

const writer = writableStream.getWriter();

console.log('initial:', writer.desiredSize); // 2

writer.write('chunk1');
console.log('after 2 chunk:', writer.desiredSize); // 1

writer.write('chunk2');
writer.write('chunk3');
console.log('after +2 chunk:', writer.desiredSize); // -1 (バックプレッシャー)

await writer.ready;
console.log('ready:', writer.desiredSize); // 正の値に戻る

await writer.close();
