#!/usr/bin/node

export default function createInt8TypedArray(length, position, value) {
  const Buffer = new ArrayBuffer(length);

  // check the postion
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const view = new DataView(Buffer);
  view.setInt8(position, value);

  return view;
}
