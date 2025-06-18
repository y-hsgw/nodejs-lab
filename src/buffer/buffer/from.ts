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

console.log('-----object-----');
{
  const buffer1 = Buffer.from(new String('1234'));
  console.log(buffer1);

  class Foo {
    [Symbol.toPrimitive]() {
      return 'this is a test';
    }
  }

  const buffer2 = Buffer.from(new Foo(), 'utf8');
  console.log(buffer2);

  const arr = new Uint16Array(2);

  arr[0] = 5000;
  arr[1] = 4000;

  const obj = {
    valueOf() {
      return arr.buffer;
    },
  };

  const buffer3 = Buffer.from(obj, 1, 2);

  console.log(buffer3);
}
