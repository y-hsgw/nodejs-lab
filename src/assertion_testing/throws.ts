import assert from 'node:assert/strict';

assert.throws(() => {
  throw new Error('Wrong value');
}, Error);

try {
  assert.throws(() => {
    throw new Error('Wrong value');
  }, TypeError);
} catch (error) {
  console.error(error);
  // AssertionError [ERR_ASSERTION]: The error is expected to be an instance of "TypeError". Received "Error"
}
