import cluster from 'node:cluster';
import process from 'node:process';

console.log(cluster.isPrimary);

if (cluster.isPrimary) {
  const worker = cluster.fork();
  worker.send('hello');
  worker.send({ hoge: 'foo' });
} else {
  process.on('message', (message) => {
    console.log('[worker] message 受信', message);
    if (typeof message === 'object') {
      process.exit(0);
    }
  });
}
