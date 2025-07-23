import { Buffer } from 'node:buffer';

{
  const buf = Buffer.from([0x12, 0x34, 0x56, 0x78, 0x90]);

  console.log(buf.readUInt32BE().toString(16));
  // Prints: 12345678
  console.log(buf.readUInt32BE(1).toString(16));
  // Prints: 34567890
}

{
  const buf = Buffer.from([0xff, 0xff, 0xff, 0xff]);

  console.log(buf.readUInt32BE());
  // Prints: 4294967295（32ビット符号なし整数の最大値）
}
