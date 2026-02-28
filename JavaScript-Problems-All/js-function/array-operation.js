function sumOfArray(numbers) {
  let sum = 0;
  for (let i of numbers) {
    sum += i;
  }
  return sum;
}

const numbs = [54, 62, 12, 6];
const sum = sumOfArray(numbs);
console.log("Sum of numbers is", sum);
