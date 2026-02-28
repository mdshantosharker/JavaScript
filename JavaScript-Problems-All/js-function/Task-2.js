// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function number(a) {
  if (a % 2 === 1) {
    return a * 2;
  }
  return a / 2;
}
console.log(number(10));
