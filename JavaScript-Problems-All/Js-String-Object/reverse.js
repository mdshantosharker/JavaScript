const sentence = "I am learning Web Dev.";
// let reverse = "";
// for (const letter of sentence) {
//   reverse = letter + reverse;
// }
// console.log(reverse);

// let reverse = ''
// for (let i = 0; i < sentence.length; i++) {
//     reverse = sentence[i]+reverse
// }
// console.log(reverse);

// const reversed = sentence.split('').reverse().join('')
// console.log(reversed);

// easy way---------------------------->>>>>>
const name = "reverse";
// let rev = "";
// for (let i of name) {
//   rev = i + rev;
// }
// console.log(rev);

// ---------------------------using  for loop for reverse ----------

// let reverse = "";
// for (let j = 0; j < name.length; j++) {
//   reverse = name[j] + reverse;
// }
// console.log(reverse);

// ------------------------------------------------------

// const rev = name.split('').reverse().join('');
// console.log(rev);

// ------------------------------------
let reverse = "";
let i = 0;
while (i < name.length) {
    reverse = name[i] + reverse;
    i++;
}
console.log(reverse);
