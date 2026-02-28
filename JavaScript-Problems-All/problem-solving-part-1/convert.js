function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}

function inchToFeet2(inch) {
  const feetFraction = inch / 12;
  const feetNumber = parseInt(feetFraction);
  const inchRemaining = inch % 12;
  const result = feetNumber + " ft " + inchRemaining + " inch. ";
  return result;
}

const shuvoHieght = inchToFeet(75);
const shuvoHieght2 = inchToFeet2(75);
console.log(shuvoHieght2);
