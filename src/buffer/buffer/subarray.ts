import { Buffer } from 'node:buffer';

{
  // ASCII アルファベットを含む `Buffer` を作成し、スライスを取得し、元の `Buffer` から 1 バイトを修正します。

  const buf1 = Buffer.allocUnsafe(26);

  const CHAR_CODE = 97;
  for (let i = 0; i < 26; i++) {
    buf1[i] = i + CHAR_CODE;
  }

  const buf2 = buf1.subarray(0, 3);

  console.log(buf2.toString('ascii', 0, buf2.length));
  // Prints: abc

  buf1[0] = 33;

  console.log(buf2.toString('ascii', 0, buf2.length));
  // Prints: !bc
  // subarrayは元のバッファを参照しているため、buf1の最初のバイトを変更するとbuf2も同様に変更される
}

{
  const buf = Buffer.from('buffer');

  console.log(buf.subarray(-6, -1).toString());
  // Prints: buffe
  // (Equivalent to buf.subarray(0, 5).)

  console.log(buf.subarray(-6, -2).toString());
  // Prints: buff
  // (Equivalent to buf.subarray(0, 4).)

  console.log(buf.subarray(-5, -2).toString());
  // Prints: uff
  // (Equivalent to buf.subarray(1, 4).)
}
