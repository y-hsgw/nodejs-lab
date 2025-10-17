import cluster from 'node:cluster';
import process from 'node:process';

if (cluster.isPrimary) {
  const worker = cluster.fork();
  worker.on('disconnect', () => console.log('[master] disconnect 受信'));
  setTimeout(() => {
    console.log('[master] worker.disconnect() 呼び出し');
    worker.disconnect();
  }, 2000);
} else {
  process.on('disconnect', () => console.log('[worker] disconnect 受信'));
}
