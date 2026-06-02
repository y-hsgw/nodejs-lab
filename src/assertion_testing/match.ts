import assert from 'node:assert/strict';

try {
  assert.match('I will fail', /pass/);
} catch (error) {
  // AssertionError [ERR_ASSERTION]: The input did not match the regular ...
  console.error(error);
}

try {
  // @ts-expect-error
  assert.match(123, /pass/);
} catch (error) {
  // AssertionError [ERR_ASSERTION]: The "string" argument must be of type string. Received type number (123)
  console.error(error);
}

assert.match('I will pass', /pass/);
// OK
