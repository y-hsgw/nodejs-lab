import { Buffer } from 'node:buffer';

{
  const buf = Buffer.from([
    // 下位バイト
    0x00, 0x00, 0x00, 0x00,
    // 上位バイト
    0x00, 0x00, 0x00, 0x80,
  ]);
  console.log(buf.readBigInt64LE()); // → -9223372036854775808n
  console.log(buf.readBigUInt64LE()); // → 9223372036854775808n
}

{
  const buf = Buffer.from([
    // スキップする対象のバイト
    0x00,
    // 下位バイト
    0x00, 0x00, 0x00, 0x00,
    // 上位バイト
    0x00, 0x00, 0x00, 0x80,
  ]);
  console.log(buf.readBigInt64LE(1)); // → -9223372036854775808n
  console.log(buf.readBigUInt64LE(1)); // → 9223372036854775808n
}
