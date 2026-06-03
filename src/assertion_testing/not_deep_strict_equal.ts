import assert from 'node:assert/strict';

assert.notDeepStrictEqual({ a: 1 }, { a: '1' });
// OK

assert.notDeepStrictEqual({ a: 1 }, { a: 1 });
// AssertionError [ERR_ASSERTION]
