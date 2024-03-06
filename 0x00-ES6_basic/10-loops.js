#!/usr/bin/node
export default function appendToEachArrayValue(array, appendString) {
  for (let i = 0; i < array.length; i += 1) {
    // eslint-disable-next-line no-param-reassign
    array[i] = appendString + array[i];
  }

  return array;
}
