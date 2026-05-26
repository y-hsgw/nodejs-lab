import assert from 'node:assert/strict';

try {
  assert.doesNotMatch('I will fail', /fail/);
  // AssertionError [ERR_ASSERTION]: The input was expected to not match the ...
} catch (err) {
  console.error(err);
}

try {
  // @ts-expect-error
  assert.doesNotMatch(123, /pass/);
  // AssertionError [ERR_ASSERTION]: The "string" argument must be of type string.
} catch (err) {
  console.error(err);
}

// OK

try {
  assert.doesNotMatch('I will pass', /different/);
  console.log('Assertion passed');
} catch (err) {
  console.error(err);
}
