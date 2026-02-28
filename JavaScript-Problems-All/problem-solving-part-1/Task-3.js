// Task-3:
// Write a function to count the number of vowels in a string.

function vowels(v) {
  const arrayOfVowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  v = v.toLowerCase();
  for (const i of v) {
    if (arrayOfVowels.includes(i)) {
      count++;
    }
  }
  return count;
}
const str = "Education";
console.log(vowels(str));
