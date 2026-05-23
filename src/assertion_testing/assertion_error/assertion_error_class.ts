import assert from 'node:assert';

const assertionError = new assert.AssertionError({
  actual: 1,
  expected: 2,
  operator: 'strictEqual',
});

console.log(assertionError);

{
  const { message } = new assert.AssertionError({
    actual: 1,
    expected: 2,
    operator: 'strictEqual',
  });

  // Verify error output:
  try {
    assert.strictEqual(1, 2);
  } catch (err) {
    assert(err instanceof assert.AssertionError);
    assert.strictEqual(err.message, message);
    assert.strictEqual(err.name, 'AssertionError');
    assert.strictEqual(err.actual, 1);
    assert.strictEqual(err.expected, 2);
    assert.strictEqual(err.code, 'ERR_ASSERTION');
    assert.strictEqual(err.operator, 'strictEqual');
    assert.strictEqual(err.generatedMessage, true);
    console.log('AssertionError properties are correct');
  }
}
