import { URLSearchParams } from 'node:url';

// 初期値が文字列
{
  const init = 'user=abc&query=xyz';
  const params1 = new URLSearchParams(init);
  console.log(params1.get('user'));
  // Prints 'abc'
  console.log(params1.toString());
  // Prints 'user=abc&query=xyz'

  // 先頭の"?"は無視される
  const params2 = new URLSearchParams(`?${init}`);
  console.log(params2.toString());
  // Prints 'user=abc&query=xyz'
}

// 初期値がオブジェクト
{
  const params = new URLSearchParams({
    user: 'abc',
    query: ['first', 'second'],
  });
  console.log(params.getAll('query'));
  // Prints [ 'first,second' ]
  console.log(params.toString());
}

// 初期値がイテラブル
{
  // Using an array
  const params1 = new URLSearchParams([
    ['user', 'abc'],
    ['query', 'first'],
    ['query', 'second'],
  ]);
  console.log(params1.toString());
  // Prints 'user=abc&query=first&query=second'

  // Using a Map object
  const map = new Map();
  map.set('user', 'abc');
  map.set('query', 'xyz');
  const params2 = new URLSearchParams(map);
  console.log(params2.toString());
  // Prints 'user=abc&query=xyz'

  // Using a generator function
  function* getQueryPairs(): Generator<[string, string], void> {
    yield ['user', 'abc'];
    yield ['query', 'first'];
    yield ['query', 'second'];
  }
  const params3 = new URLSearchParams(getQueryPairs());
  console.log(params3.toString());
  // Prints 'user=abc&query=first&query=second'

  // Each key-value pair must have exactly two elements
  // @ts-expect-error
  new URLSearchParams([['user', 'abc', 'error']]);
  // Throws TypeError [ERR_INVALID_TUPLE]:
  //        Each query pair must be an iterable [name, value] tuple
}
