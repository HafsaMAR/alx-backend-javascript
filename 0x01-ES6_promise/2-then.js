#!/usr/bin/node
export default function handleResponseFromAPI(promise) {
  promise
    .then(() => {
      const response = { status: 200, body: 'Success' };
      console.log('Got a response from the API');
      return response;
    })
    .catch(() => {
      console.error('Got a response from the API');
      return new Error();
    });
}
