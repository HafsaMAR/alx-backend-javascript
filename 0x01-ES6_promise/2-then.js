#!/usr/bin/node
export default function handleResponseFromAPI(promise) {
  promise
    .then(() => {
      const response = { status: 200, body: 'Success' };
      return response;
    })
    // eslint-disable-next-line arrow-body-style
    .catch(() => {
      return new Error();
    })
    .finally(() => {
      console.log('Got a response from the API');
    });
}
