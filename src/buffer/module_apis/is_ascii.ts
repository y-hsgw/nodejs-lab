import { isAscii } from 'node:buffer';

// ✅ ASCII のみ（trueになるケース）
const asciiBuf = Buffer.from('Hello World!', 'ascii');
console.log(isAscii(asciiBuf)); // true

// ✅ 空バッファ（これも true）
const emptyBuf = Buffer.alloc(0);
console.log(isAscii(emptyBuf)); // true

// ❌ 非ASCIIを含む（falseになるケース）
const utf8Buf = Buffer.from('こんにちは', 'utf8');
console.log(isAscii(utf8Buf)); // false

// ❌ バイナリデータで範囲外の値を入れる（false）
const nonAsciiBuf = Buffer.from([0xff, 0xfe, 0x00, 0x41]);
console.log(isAscii(nonAsciiBuf)); // false

// ❌ ASCIIとUTF-8の混合（falseになるケース）
const mixed = Buffer.concat([asciiBuf, utf8Buf]);
console.log(isAscii(mixed)); // false
