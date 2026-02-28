// Task-4:
// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

function longestWord(words) {
  const str = words.split(" ");
  let wordArray = str[0];
  for (let word of str) {
    if (word.length > wordArray.length) {
      wordArray = word;
    }
  }
  return wordArray;
}

const str = "I am learning Programming to become a programmer";
console.log(longestWord(str));
