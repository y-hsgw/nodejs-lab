import assert from 'node:assert/strict';

assert.strictEqual(1, 1);
// OK

try {
  assert.strictEqual(1, 2);
} catch (error) {
  console.error(error);
  // AssertionError [ERR_ASSERTION]: Expected inputs to be strictly equal:
  //
  // 1 !== 2
}

assert.strictEqual('Hello foobar', 'Hello World!');
// AssertionError [ERR_ASSERTION]: Expected inputs to be strictly equal:
// + actual - expected
//
// + 'Hello foobar'
// - 'Hello World!'
//          ^
