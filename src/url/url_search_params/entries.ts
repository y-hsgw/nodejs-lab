import { URLSearchParams } from 'node:url';

const searchParams = new URLSearchParams('foo=bar&xyz=baz');

console.log(searchParams.entries());

for (const [name, value] of searchParams) {
  console.log(name, value);
}
