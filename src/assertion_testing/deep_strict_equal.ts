import { deepStrictEqual } from 'node:assert';

const actual = { a: 1, b: { c: 2 } };
const expected = { a: 1, b: { c: 1 } };

// 成功するアサーション
deepStrictEqual(actual, actual, 'Objects are not deeply equal');

// 失敗するアサーション
deepStrictEqual(actual, expected, 'Objects are not deeply equal');
