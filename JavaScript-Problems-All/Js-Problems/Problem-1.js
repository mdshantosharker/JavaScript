/**Problem 1: Word Frequency Counter
Function name: wordFrequency(sentence)

Statement: Count how many times each word appears in a sentence and return the result as an object.
Rules:
Ignore case differences

Ignore extra spaces

Test case 1
Input: "I love JS and I love coding and JS is fun"
Output: { i: 2, love: 2, js: 2, and: 2, coding: 1, is: 1, fun: 1 }

Test case 2
Input:  " Hello hello HELLO "
Output: { hello: 3 }

*/

// ---------------ans>>>>>>>>>>-----------

// function wordFrequency(sentence) {
//   let wordsCount = {};
//   const words = sentence.toLowerCase().split(" ");
//   for (let word of words) {
//     if (wordsCount[word]) {
//       wordsCount[word]++;
//     } else {
//       wordsCount[word] = 1;
//     }
//   }
//   return wordsCount;
// }

// const sentence = "I love JS and I love coding and JS is fun Fun FUN";
// console.log(wordFrequency(sentence));

// -----------------------------another way to solved problem-------------------------------------

function wordFrequency(sentence) {
  let wordsCount = {};
  const words = sentence.trim().split(" ");
  for (let word of words) {
    const wordToLowerCase = word.toLowerCase();
    if (wordsCount.hasOwnProperty(wordToLowerCase)) {
      wordsCount[wordToLowerCase]++;
    } else {
      wordsCount[wordToLowerCase] = 1;
    }
  }
  return wordsCount;
}

const sentence = " Hello hello HELLO ";
console.log(wordFrequency(sentence));
