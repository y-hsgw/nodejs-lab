import { Buffer } from 'node:buffer';

{
  const buf = Buffer.from([0x12, 0x34, 0x56, 0x78, 0x90, 0xab]);

  console.log(buf.readUIntLE(0, 6).toString(16));
  // Prints: ab9078563412
}

{
  const buf = Buffer.from([0xff, 0xff, 0xff, 0xff, 0xff, 0xff]);

  console.log(buf.readUIntLE(0, 6));
  // Prints: 281474976710655（48ビット符号なし整数の最大値）
}
