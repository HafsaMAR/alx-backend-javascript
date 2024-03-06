#!/usr/bin/node
export default function taskBlock(trueOrFalse) {
  const task = false; // Changed var to let
  const task2 = true; // Changed var to let

  if (trueOrFalse) {
    // eslint-disable-next-line no-unused-vars, no-shadow
    const task = true; // Removed var keyword
    // eslint-disable-next-line no-shadow, no-unused-vars
    const task2 = false; // Removed var keyword
  }

  return [task, task2];
}
