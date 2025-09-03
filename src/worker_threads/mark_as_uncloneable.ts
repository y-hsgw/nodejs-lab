import { markAsUncloneable } from 'node:worker_threads';

const unclonedObject = { foo: 'bar' };
markAsUncloneable(unclonedObject);
const messageChannel1 = new MessageChannel();

messageChannel1.port1.onmessage = ({ data }) => {
  console.log(data);
  messageChannel1.port1.close();
};

try {
  messageChannel1.port2.postMessage(unclonedObject);
} catch (error) {
  console.warn(error)
}


const clonedObject = { foo: "bar" }

try {
  messageChannel1.port2.postMessage(clonedObject);
} catch (error) {
  console.warn(error)
}
