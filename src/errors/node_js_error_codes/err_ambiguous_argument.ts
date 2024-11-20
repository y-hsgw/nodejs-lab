import assert from 'node:assert';

const throwError = () => {
  throw new Error('Expected error message');
};

try {
  assert.throws(
    throwError,
    // 「期待されるエラーメッセージ」と「アサートが失敗したときのメッセージ」のどちらなのか、
    // Node.js が判断できない状態になるとエラーが発生する
    'Expected error message',
  );
} catch (error) {
  console.error(error);
}
