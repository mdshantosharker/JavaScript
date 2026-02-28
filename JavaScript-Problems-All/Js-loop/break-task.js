// ------Task-1
// Write a loop 1 to 200. Use break to exit the loop once you find 100.

// ans>>>>>>>>>>>>
// for (let i = 1; i <= 200; i++) {
//   console.log(i);
//   if (i === 100) {
//     break;
//   }
// }

// Task-2-----------------------
/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

// ---------ans>>>>>>>
// let number = 1;
// let sum = 0;
// while (number <= 100) {
//   sum += number;
//   console.log(sum, number);
//   number++;
//   if (sum >= 100) {
//     break;
//   }
// }

// Task-3
/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/
// -------------------ans>>>>>>>>>>>>>>>>>

for (let i = 1; i <= 100; i++) {
  console.log(i);
  if (i === 4) {
    break;
  }
}
