#!/usr/bin/node
export default function taskBlock(trueOrFalse) {
  const task = false; // Changed var to let
  const task2 = true; // Changed var to let

  if (trueOrFalse) {
    const task = true; // Removed var keyword
    const task2 = false; // Removed var keyword
  }

  return [task, task2];
}
