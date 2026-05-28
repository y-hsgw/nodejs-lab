import assert from 'node:assert/strict';

await assert.doesNotReject(async () => {
  console.log('This will not reject');
});

try {
  await assert.doesNotReject(async () => {
    throw new TypeError('Wrong value');
  }, SyntaxError);
} catch (err) {
  console.error(err);
}

try {
  assert.doesNotReject(
    Promise.reject(new TypeError('Promise rejected with wrong value')),
    SyntaxError,
  );
} catch (err) {
  console.error(err);
}
