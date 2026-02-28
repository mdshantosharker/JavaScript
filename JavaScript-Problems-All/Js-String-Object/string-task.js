// Task-1:
// Count how many times a string has the letter a

// let count = 0;
// const str = "programming";
// for (let i of str) {
//   if (i === "a") {
//     count += 1;
//   }
// }
// console.log(count);

// -------------------------------------
// Task-2:
// Count how many times a string has the letter a or A

// let count = 0;
// const str = "programming And";
// for (let i of str) {
//   if (i === "a" || i === "A") {
//     count++;
//   }
// }
// console.log(count);

// --------------------------------------------

// Task-3:
// Check whether a string contains all the vowels a, e, i, o, u

// const str = "education";

// if (
//   str.includes("a") &&
//   str.includes("e") &&
//   str.includes("i") &&
//   str.includes("o") &&
//   str.includes("u")
// ) {
//   console.log("yes all vowels are here");
// } else {
//   console.log("No");
// }

// ----------------------------------------------

// Task-4:
// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

// let str = "xX programming x";
// str = str.replaceAll("x", "y").replaceAll("X", "Y").replaceAll("p", "P");
// console.log(str);

// ---------------------------------------------------

// Task-5:
// Capitalize Every first Letter of each word in a String

// let str = "hello world from javascript";
// let words = str.split(" ");
// for (let i = 0; i < words.length; i++) {
//   words[i] = words[i][0].toUpperCase() + words[i].slice(1);
// }
// let result = words.join(" ");
// console.log(result);

// another styles to solved
let str = "hello world from javascript";
let mainString = [];
let words = str.split(" ");
for (let i of words) {
  const newWord = i[0].toUpperCase() + i.slice(1);
  mainString.push(newWord);
}
console.log(mainString.join(" "));

// console.log(words);
