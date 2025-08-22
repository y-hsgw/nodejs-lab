import { isUtf8 } from 'node:buffer';

// ✅ UTF-8 のみ（trueになるケース）
const utf8buf = Buffer.from('Hello World!', 'utf8');
console.log(isUtf8(utf8buf)); // true

// ✅ 空バッファ（これも true）
const emptyBuf = Buffer.alloc(0);
console.log(isUtf8(emptyBuf)); // true

// ❌ 非UTF-8を含む（falseになるケース）
const asciiBuf = Buffer.from('こんにちは', 'ascii');
console.log(isUtf8(asciiBuf)); // false

// ❌ バイナリデータで範囲外の値を入れる（false）
const nonAsciiBuf = Buffer.from([0xff, 0xfe, 0x00, 0x41]);
console.log(isUtf8(nonAsciiBuf)); // false

// ❌ ASCIIとUTF-8の混合（falseになるケース）
const mixed = Buffer.concat([asciiBuf, utf8buf]);
console.log(isUtf8(mixed)); // false
