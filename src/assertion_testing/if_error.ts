import assert from 'node:assert/strict';

assert.ifError(null);
// OK
try {
  assert.ifError(0);
} catch (error) {
  // AssertionError [ERR_ASSERTION]: ifError got unwanted exception: 0
  console.error(error);
}

try {
  assert.ifError('error');
} catch (error) {
  // AssertionError [ERR_ASSERTION]: ifError got unwanted exception: 'error'
  console.error(error);
}

try {
  assert.ifError(new Error());
} catch (error) {
  // AssertionError [ERR_ASSERTION]: ifError got unwanted exception: Error
  console.error(error);
}

// Create some random error frames.
let err;
(function errorFrame() {
  err = new Error('test error');
})();

(function ifErrorFrame() {
  assert.ifError(err);
})();
// AssertionError [ERR_ASSERTION]: ifError got unwanted exception: test error
//     at ifErrorFrame
//     at errorFrame
