import { Buffer } from 'node:buffer';

console.log('-----静的なメソッド `Buffer.compare()` の検証-----');
{
  const buf1 = Buffer.from('1234');
  const buf2 = Buffer.from('0123');
  const arr = [buf1, buf2];

  console.log(arr.sort(Buffer.compare));
  // Prints: [ <Buffer 30 31 32 33>, <Buffer 31 32 33 34> ]
  // (This result is equal to: [buf2, buf1].)
}

console.log('-----Bufferインスタンスメソッドの `compare()` 検証-----');

{
  {
    const buf1 = Buffer.from('ABC');
    const buf2 = Buffer.from('BCD');
    const buf3 = Buffer.from('ABCD');

    console.log(buf1.compare(buf1));
    // Prints: 0
    console.log(buf1.compare(buf2));
    // Prints: -1
    console.log(buf1.compare(buf3));
    // Prints: -1
    console.log(buf2.compare(buf1));
    // Prints: 1
    console.log(buf2.compare(buf3));
    // Prints: 1
    console.log([buf1, buf2, buf3].sort(Buffer.compare));
    // Prints: [ <Buffer 41 42 43>, <Buffer 41 42 43 44>, <Buffer 42 43 44> ]
    // (This result is equal to: [buf1, buf3, buf2].)
  }

  console.log('-----特定の範囲に限定した比較検証-----');

  {
    const buf1 = Buffer.from([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const buf2 = Buffer.from([5, 6, 7, 8, 9, 1, 2, 3, 4]);

    console.log(buf1.compare(buf2, 5, 9, 0, 4));
    // Prints: 0
    console.log(buf1.compare(buf2, 0, 6, 4));
    // Prints: -1
    console.log(buf1.compare(buf2, 5, 6, 5));
    // Prints: 1
  }
}
