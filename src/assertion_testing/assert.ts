import assert from 'node:assert';

const value1: number = 1;
const value2: number = 2;

// これは成功するアサーション
assert(value1 === value1, `Expected ${value1} to be equal to ${value1}`);

// これは失敗するアサーション
assert(value1 === value2, `Expected ${value1} to be equal to ${value2}`);
