export default function hasValuesFromArray(set, array) {
  let result = true;
  array.forEach((element) => {
    if (set.has(element) === false) {
      result = false;
    }
  });
  return result;
}
