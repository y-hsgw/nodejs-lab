import { Buffer } from 'node:buffer';

console.log('-----numberの配列-----');

{
  const buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
  console.log(buf);
}

console.log('-----ArrayBuffer-----');

{
  const arr = new Uint16Array(2);

  arr[0] = 5000;
  arr[1] = 4000;

  const buf1 = Buffer.from(arr.buffer);

  console.log(buf1);

  arr[1] = 6000;

  console.log(buf1);

  const buf2 = Buffer.from(arr.buffer, 1, 2);
  console.log(buf2);
}

console.log('-----buffer-----');
{
  const buf1 = Buffer.from('buffer');
  const buf2 = Buffer.from(buf1);

  buf1[0] = 0x61;

  console.log(buf1.toString());
  console.log(buf2.toString());
}
