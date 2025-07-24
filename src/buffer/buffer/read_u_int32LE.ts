import { Buffer } from 'node:buffer';

{
  const buf = Buffer.from([0x12, 0x34, 0x56, 0x78]);

  console.log(buf.readUInt32LE().toString(16));
  // Prints: 78563412
}

{
  const buf = Buffer.from([0xff, 0xff, 0xff, 0xff]);

  console.log(buf.readUInt32LE());
  // Prints: 4294967295（32ビット符号なし整数の最大値）
}
