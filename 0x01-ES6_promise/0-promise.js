#!/usr/bin/node
export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    // Simulating an asynchronous operation (e.g. API call)
    setTimeout(() => {
      resolve('Response from API');
    }, 1000); // Simulating a delay of 1s
  });
}
