import assert from 'node:assert';

assert.partialDeepStrictEqual({ a: { b: { c: 1 } } }, { a: { b: { c: 1 } } });
// OK

assert.partialDeepStrictEqual({ a: 1, b: 2, c: 3 }, { b: 2 });
// OK

assert.partialDeepStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9], [4, 5, 8]);
// OK

assert.partialDeepStrictEqual(
  new Set([{ a: 1 }, { b: 1 }]),
  new Set([{ a: 1 }]),
);
// OK

assert.partialDeepStrictEqual(
  new Map([
    ['key1', 'value1'],
    ['key2', 'value2'],
  ]),
  new Map([['key2', 'value2']]),
);
// OK

assert.partialDeepStrictEqual(123n, 123n);
// OK

try {
  assert.partialDeepStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9], [5, 4, 8]);
} catch (error) {
  // AssertionError
  console.error(error);
}

try {
  assert.partialDeepStrictEqual({ a: 1 }, { a: 1, b: 2 });
} catch (error) {
  // AssertionError
  console.error(error);
}

try {
  assert.partialDeepStrictEqual({ a: { b: 2 } }, { a: { b: '2' } });
} catch (error) {
  // AssertionError
  console.error(error);
}
