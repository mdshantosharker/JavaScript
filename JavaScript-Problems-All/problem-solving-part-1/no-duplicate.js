const biryaniKhor = [
  "abul",
  "babul",
  "cabul",
  "abul",
  "babul",
  "dabul",
  "kabul",
  "cabul",
];
const numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61];

function noDuplicate(array) {
  const unique = [];
  for (let i of array) {
    if (unique.includes(i) === false) {
      unique.push(i);
    }
  }
  return unique;
}

const uniqueArray = noDuplicate(numbers);
console.log(uniqueArray);
const uniqueArray2 = noDuplicate(biryaniKhor);
console.log(uniqueArray2);
