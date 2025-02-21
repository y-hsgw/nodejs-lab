import { watch } from 'fs/promises';

const abortController = new AbortController();
const { signal } = abortController;
setTimeout(() => abortController.abort(), 10000);

try {
  const watcher = watch(import.meta.filename, { signal });
  for await (const event of watcher) console.log(event);
} catch (err) {
  if (err instanceof Error && err.name === 'AbortError') {
    console.log('watching aborted');
  }

  throw err;
}
