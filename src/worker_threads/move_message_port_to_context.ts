import vm from 'node:vm';
import { MessageChannel, moveMessagePortToContext } from 'node:worker_threads';

const { port1, port2 } = new MessageChannel();

// sandbox はコンテキストの global になるが、型上は { console: Console } のまま
const sandbox = { console };
const context = vm.createContext(sandbox);
const movedPort = moveMessagePortToContext(port2, context);

port2.postMessage('port2だよ〜');
movedPort.postMessage('movedPortだよ');

port1.on('message', (e) => {
  console.log(e);
  port1.close();
});
