import { EventEmitterAsyncResource } from 'node:events';

const eventEmitterAsyncResource = new EventEmitterAsyncResource({ name: 'Q' });

console.log(eventEmitterAsyncResource.asyncResource);
