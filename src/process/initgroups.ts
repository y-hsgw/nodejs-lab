// @ts-expect-error
import { getgroups, initgroups, setgid } from 'node:process';

console.log(getgroups?.());
initgroups('nodeuser', 1000); // switch user
console.log(getgroups?.());
setgid?.(1000); // drop root gid
console.log(getgroups?.());
