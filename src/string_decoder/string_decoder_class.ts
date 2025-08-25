import { StringDecoder } from 'node:string_decoder';

{
  const decoder = new StringDecoder();

  console.log(decoder);
}
{
  const decoder = new StringDecoder('ascii');

  console.log(decoder);
}
