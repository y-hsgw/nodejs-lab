import { ByteLengthQueuingStrategy, WritableStream } from 'node:stream/web';
import { setTimeout } from 'node:timers/promises';

const writableStream = new WritableStream(
  {
    async write(chunk) {
      console.log('chunk:', chunk);
      await setTimeout(5000); // わざと遅くする
    },
  },
  new ByteLengthQueuingStrategy({ highWaterMark: 8 }), // 8 bytes まで
);

const writer = writableStream.getWriter();

console.log('initial:', writer.desiredSize); // 8

writer.write(new Uint8Array(6));
console.log('after 6 bytes:', writer.desiredSize); // 2

writer.write(new Uint8Array(4));
console.log('after +4 bytes:', writer.desiredSize); // -2 (バックプレッシャー)

await writer.ready;
console.log('ready:', writer.desiredSize); // 正の値に戻る

await writer.close();
