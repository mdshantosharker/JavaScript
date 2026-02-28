// Task-1-------------------------
/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/

// --------ans-------

// for (let i = 1; i <= 40; i++) {
//     if (i % 2 !== 0) {
//         continue;
//     }
//     console.log(i);
// }

// Task-2
// display odd number from 55 to 85 and skip the numbers divisible by 5.

let i = 55;
while (i <= 85) {
  if (i % 2 === 0 && i % 5 === 0) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}
