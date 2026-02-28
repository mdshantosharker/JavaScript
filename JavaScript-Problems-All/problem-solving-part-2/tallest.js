const heights = [65, 1, 66, 68, 72, 78, 60, 65, 66];

// ---------------------max--number----
function getMax(numbers) {
  let max = numbers[0];
  for (let i of numbers) {
    if (i > max) {
      max = i;
    }
  }
  return max;
}
console.log("large number is :", getMax(heights));

// -----------------------min number------

function getMin(numbers) {
  let minNumber = numbers[0];
  for (let min of numbers) {
    if (minNumber > min) {
      minNumber = min;
    }
  }
  return minNumber;
}
console.log("Min number is :", getMin(heights));
