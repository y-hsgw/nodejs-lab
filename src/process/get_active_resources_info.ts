import { getActiveResourcesInfo } from 'node:process';
import { setTimeout, setImmediate } from 'node:timers';

console.log('Before:', getActiveResourcesInfo());
setTimeout(() => {}, 1000);
setImmediate(() => {});
console.log('After:', getActiveResourcesInfo());
// Prints:
//   Before: ['TTYWrap', 'TTYWrap', 'TTYWrap' ]
//   After: ['TTYWrap', 'TTYWrap', 'TTYWrap', 'Timeout', 'Immediate' ]
