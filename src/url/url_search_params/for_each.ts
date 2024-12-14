import { URLSearchParams } from 'node:url';

const searchParams = new URLSearchParams('?a=b&c=d');
searchParams.forEach((value, name, searchParams) => {
  console.log(name, value, searchParams === searchParams);
});
// Prints:
//   a b true
//   c d true
