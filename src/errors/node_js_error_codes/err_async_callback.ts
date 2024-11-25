import { createHook } from 'node:async_hooks';

const invalidHookCallbacks = {
  init: 123,
  before: null,
  after: undefined,
  destroy: 'not a function',
};

try {
  // @ts-expect-error
  const hook = createHook(invalidHookCallbacks);
  hook.enable();
} catch (err) {
  console.error(err);
}
