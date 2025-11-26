import { finalization } from 'node:process';

function onFinalize(obj: object, event: string) {
  console.log(obj);
  console.log(event);
}

const resource = {
  hoge: 'foo',
};

finalization.register(resource, onFinalize);
// registerから削除され、onFinalizeは呼び出されなくなる
finalization.unregister(resource);
