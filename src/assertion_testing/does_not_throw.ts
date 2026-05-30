import assert from 'node:assert/strict';

assert.doesNotThrow(() => {
  throw new TypeError('Wrong value');
}, SyntaxError);
