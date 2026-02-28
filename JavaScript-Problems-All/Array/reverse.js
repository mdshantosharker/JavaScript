const numbers = [1, 2, 3, 4, 5, 6, 7];
// numbers.reverse()
// console.log(numbers);

const reverse = [];

// for of loop
// for (let i of numbers) {
//   console.log(i);
//   reverse.unshift(i);
// }
// console.log(reverse);

// ---------------------------
// for loop
// for (let i = 0; i < numbers.length; i++) {
//   reverse.unshift(numbers[i]);
// }
// console.log(reverse);

// -----------------------

for (let i = numbers.length - 1; i >= 0; i--) {
  //   console.log(numbers[i]);
  reverse.push(numbers[i]);
}
console.log(reverse);
