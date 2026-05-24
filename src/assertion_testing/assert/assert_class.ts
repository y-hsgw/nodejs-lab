import { Assert, type AssertStrict } from 'node:assert';

// 比較に使うオブジェクト
const big = {
  items: Array.from({ length: 60 }, (_, i) => ({
    id: i + 1,
    value: `value-${i + 1}`,
  })),
};

// 1) デフォルト (diff: 'simple')
try {
  const fullAssert: AssertStrict = new Assert({ diff: 'simple' });
  fullAssert.notDeepStrictEqual(big, big);
} catch (err) {
  console.error('Assertion failed with simple diff:');
  if (err instanceof Error) {
    console.error(err.message);
  }
}

// 2) diff: 'full' な Assert インスタンス
try {
  const fullAssert: AssertStrict = new Assert({ diff: 'full' });
  fullAssert.notDeepStrictEqual(big, big);
} catch (err) {
  console.error('Assertion failed with full diff:');
  if (err instanceof Error) {
    console.error(err.message);
  }
}
