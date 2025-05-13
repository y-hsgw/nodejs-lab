import { addAbortListener } from 'node:events';

function example(signal: AbortSignal) {
  let disposable;
  try {
    signal.addEventListener('abort', (e) => e.stopImmediatePropagation());
    disposable = addAbortListener(signal, (e) => {
      console.log('finallyでdisposeしているので発火しない', e);
    });
  } finally {
    disposable?.[Symbol.dispose]();
  }
}

const abortController = new AbortController();
example(abortController.signal);

addAbortListener(abortController.signal, (e) => {
  console.log('発火される', e);
});

abortController.abort();
