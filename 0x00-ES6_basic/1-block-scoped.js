#!/usr/bin/node
export default function taskBlock(trueOrFalse) {
  var task = false; // Changed var to let
  var task2 = true; // Changed var to let

  if (trueOrFalse) {
    let task = true; // Removed var keyword
    let task2 = false; // Removed var keyword
  }

  return [task, task2];
}
