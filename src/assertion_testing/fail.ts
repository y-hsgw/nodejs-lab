import assert from 'node:assert/strict';

try {
  assert.fail('This is a failure message');
} catch (error) {
  console.error(error);
}

try {
  assert.fail('boom');
} catch (error) {
  console.error(error);
}

assert.fail(new TypeError('need array'));
// TypeError: need array
