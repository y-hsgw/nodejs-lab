import { parse } from 'node:url';

try {
  // @ts-expect-error
  parse(() => {});
} catch (error) {
  console.log(error);
}
