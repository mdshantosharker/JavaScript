// Task -2:
// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName(array) {
  let name = array[0];
  for (let a of array) {
    if (a.length < name.length) {
      name = a;
    }
  }
  return name;
}
const heights2 = ["rahim", "robin", "rafi", "ron", "rashed"];
console.log(smallestName(heights2));
