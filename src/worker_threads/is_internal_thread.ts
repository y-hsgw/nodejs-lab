import { isInternalThread } from 'node:worker_threads';
console.log(isInternalThread);

// node ./dist/worker_threads/is_internal_thread.js だと false
// node --experimental-loader ./dist/worker_threads/is_internal_thread.js だと true
