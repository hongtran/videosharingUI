import { createConsumer } from '@rails/actioncable';

let cable;

export function connect(url) {
  cable = createConsumer(url);
  console.log('cable:', cable);
}

export function disconnect() {
  if (cable) {
    cable.disconnect();
  }
}

export function subscribe(channel, handlers) {
  if (cable) {
    cable.subscriptions.create(channel, handlers);
  }
}
