import 'data:text/javascript,console.log("hello!");';
// @ts-expect-error
import _ from 'data:application/json,"world!"' with { type: 'json' };
console.log(_);
