import { Buffer } from 'node:buffer';

const buf1 = Buffer.allocUnsafe(26);
const buf2 = Buffer.allocUnsafe(26).fill('!');

for (let i = 0; i < 26; i++) {
  // 97は『a』を表す10進数のASCII値である。ASCII 'a'（97）〜 'z'（122）を格納
  buf1[i] = i + 97;
}
console.log(buf1.toString('ascii'));
// buf1` のバイト 16 からバイト 19（qrst） を `buf2` のバイト 8 から始まる `buf2` にコピーする。
buf1.copy(buf2, 8, 16, 20);

console.log(buf2.toString('ascii', 0, 25));
// Prints: !!!!!!!!qrst!!!!!!!!!!!!!
