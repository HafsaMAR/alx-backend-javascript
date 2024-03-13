export default function cleanSet(Set, startString) {
  const cleanedValue = [];

  Set.forEach((element) => {
    if (element.startsWith(startString)) {
      cleanedValue.push(element.slice(startString.length));
    }
  });

  return cleanedValue.join('-');
}
