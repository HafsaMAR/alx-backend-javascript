#!/usr/bin/node
export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const element of array) {
    // eslint-disable-next-line no-param-reassign
    newArray.push(appendString + element);
  }

  return newArray;
}
