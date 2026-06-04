import assert from 'node:assert/strict';

assert.ok(true);
// OK
assert.ok(1);
// OK

assert.ok(false, "it's false");
// AssertionError: it's false
