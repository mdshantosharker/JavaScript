// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(numbers) {
  let binaryZeroCount = 0;
  for (let i of numbers) {
    if (i === "0") {
      binaryZeroCount++;
    }
  }
  return binaryZeroCount;
}
console.log(count_zero("01010010111"));
