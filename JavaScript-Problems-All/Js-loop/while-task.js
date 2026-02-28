// Task-1
/***
"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.
 */
// ----------ans----------
// let number = 1;
// while (number <= 60) {
//   console.log(
//     "I will invest at least 6 hrs every single day for next 60 days!",
//     number,
//   );
//   number++;
// }





// --------------------------------------------------------------------------
// Task-2(subtask-2)----------------------
// Find all the odd numbers from 61 to 100.
// let number = 61;
// while(number<=100){
//     if(number%2!==0){
//         console.log(number);
//     }
//     number++
// }


// -------------------------------------------------------
// another way to solve this
// let num = 61;
// while (num <= 100) {
//   console.log(num);
//   num += 2;
// }




// -----------------------------------------------------------------------------------------
// Task-2(subtask-2)
// Find all the even numbers from 78 to 98.
// let number = 78;
// while (number <= 98) {
//   if (number % 2 === 0) {
//     console.log("this is even number", number);
//   }
//   number++;
// }





// -------------------------------------------------------------------------------------------
// Task-3(subtask-1)
// Display sum of all the odd numbers from 81 to 131.
// let number = 81;
// let sum = 0;
// while (number <= 131) {
//   if (number % 2 !== 0) {
//     sum += number;
//   }
//   number++;
// }
// console.log(sum);





// -------------------------------------------------------------------------------------------------------
// Task-3(subtask-1)
// Display sum of all the even numbers from 206 to 311.

// let sum = 0;
// let number = 206;
// while (number <= 311) {
//   if (number % 2 === 0) {
//     sum = sum + number;
//   }
//   number++;
// }
// console.log(sum);




// -------------------------------------------------------------------------------------------------------------------
// Task-4
// As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5

// let number = 1;
// let num = 5;
// let multiplication = 0;
// while (number <= 10) {
//   console.log(number + "x" + num + "=" + number * num);
//   number++;
// }




// ----------------------------------------------------------------
// Task-5
// Implement a countdown timer that counts down from 21 to 15
let number = 21;
while (number >= 15) {
  console.log(number);
  number--;
}
