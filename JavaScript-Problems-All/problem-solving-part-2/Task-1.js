// Task -1:
// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

function lowest(array) {
  let number = array[0];
  for (let a of array) {
    if (number > a) {
      number = a;
    }
  }
  return number;
}

const heights2 = [167, 190, 120, 165, 137];
console.log(lowest(heights2));
