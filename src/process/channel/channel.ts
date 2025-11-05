import { fork } from 'node:child_process';
import process from 'node:process';
import { URL } from 'node:url';

// 親/子の判定は環境変数で行う
if (process.env.IS_CHILD === '1') {
  // ===== 子プロセス側 =====
  console.log('[child] started. pid=', process.pid);

  console.log('[child] process.channel exists:', process.channel);
} else {
  // ===== 親プロセス側 =====
  console.log('[parent] started. pid=', process.pid);

  // 自分自身を子としてfork。forkは自動でIPCチャンネルを付与
  fork(new URL(import.meta.url), {
    env: { ...process.env, IS_CHILD: '1' },
  });
}
