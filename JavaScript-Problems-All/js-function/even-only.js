function evenNumbersOnly(numbers) {
  const evens = [];
  for (let num of numbers) {
    if (num % 2 === 0) {
      evens.push(num);
    }
  }
  return evens;
}
const numbers = [5, 8, 91, 24, 6];
console.log(evenNumbersOnly(numbers));
