import assert from 'node:assert/strict';

await assert.rejects(
  async () => {
    throw new TypeError('Wrong value');
  },
  {
    name: 'TypeError',
    message: 'Wrong value',
  },
);

await assert.rejects(
  async () => {
    throw new TypeError('Wrong value');
  },
  {
    name: 'SyntaxError',
    message: 'Wrong value',
  },
);
