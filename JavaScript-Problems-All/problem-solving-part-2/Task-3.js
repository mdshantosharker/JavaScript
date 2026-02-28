// Task-3:
// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

function calculateElectronicsBudget(a, b, c) {
  const laptop = 35000 * a;
  const tablet = 15000 * b;
  const mobile = 20000 * c;

  const total = laptop + tablet + mobile;
  return total;
}

console.log(calculateElectronicsBudget(2, 1, 3));
