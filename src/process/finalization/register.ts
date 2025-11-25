import { finalization } from 'node:process';

function onFinalize(obj: object, event: string) {
  console.log(obj);
  console.log(event);
}

const resource = {
  hoge: 'foo',
};

finalization.register(resource, onFinalize);
