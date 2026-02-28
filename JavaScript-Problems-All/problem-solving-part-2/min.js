const prices = [1,2000, 16000, 50000, 100000, 12000, 30000, 35000];
function getMin(numbers) {
  let min = numbers[0];
  for (const i of numbers) {
    if (i < min) {
      min = i;
    }
  }
  return min;
}
const cheap = getMin(prices);
console.log("cheapest one is :", cheap);
